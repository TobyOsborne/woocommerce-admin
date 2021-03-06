/**
 * External dependencies
 */
import { Component, Suspense, lazy } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { withSelect } from '@wordpress/data';
import { identity } from 'lodash';
import { getSetting } from '@woocommerce/wc-admin-settings';
import {
	ONBOARDING_STORE_NAME,
	withOnboardingHydration,
} from '@woocommerce/data';
import { Spinner } from '@woocommerce/components';

/**
 * Internal dependencies
 */
import './style.scss';

const CustomizableDashboard = lazy( () =>
	import( /* webpackChunkName: "customizable-dashboard" */ './customizable' )
);

class Dashboard extends Component {
	render() {
		const { path, query } = this.props;

		if ( window.wcAdminFeatures[ 'analytics-dashboard/customizable' ] ) {
			return (
				<Suspense fallback={ <Spinner /> }>
					<CustomizableDashboard query={ query } path={ path } />
				</Suspense>
			);
		}

		return null;
	}
}

const onboardingData = getSetting( 'onboarding', {} );

export default compose(
	!! onboardingData.tasksStatus
		? withOnboardingHydration( { tasksStatus: onboardingData.tasksStatus } )
		: identity,
	withSelect( ( select ) => {
		const { getProfileItems } = select( ONBOARDING_STORE_NAME );
		const profileItems = getProfileItems();

		return { profileItems };
	} )
)( Dashboard );
