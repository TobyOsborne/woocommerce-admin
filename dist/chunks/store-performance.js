(window.__wcAdmin_webpackJsonp=window.__wcAdmin_webpackJsonp||[]).push([[49],{592:function(e,t,r){"use strict";r.d(t,"b",(function(){return b})),r.d(t,"a",(function(){return y}));var n=r(5),a=r.n(n),c=r(19),o=r.n(c),i=r(2),s=r(42),u=r(34),l=r(29),m=r(199),p=r(35);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b=function(e){var t=e.indicator,r=e.primaryData,n=e.secondaryData,a=e.currency,c=e.formatAmount,o=e.persistedQuery,s=Object(i.find)(r.data,(function(e){return e.stat===t.stat})),u=Object(i.find)(n.data,(function(e){return e.stat===t.stat}));if(!s||!u)return{};var d=s._links&&s._links.report[0]&&s._links.report[0].href||"",f=function(e,t,r){return e?"/jetpack"===e?Object(p.f)("admin.php?page=jetpack#/dashboard"):Object(l.getNewPath)(t,e,{chart:r.chart}):""}(d,o,s),b="/jetpack"===d?"wp-admin":"wc-admin",y="currency"===s.format,O=Object(m.calculateDelta)(s.value,u.value);return{primaryValue:y?c(s.value):Object(m.formatValue)(a,s.format,s.value),secondaryValue:y?c(u.value):Object(m.formatValue)(a,u.format,u.value),delta:O,reportUrl:f,reportUrlType:b}},y=function(e,t,r,n){var a=e(u.REPORTS_STORE_NAME),c=a.getReportItems,i=a.getReportItemsError,l=a.isResolving,m=e(u.SETTINGS_STORE_NAME).getSetting("wc_admin","wcAdminSettings").woocommerce_default_date_range,p=Object(s.getCurrentDates)(r,m),d=p.primary.before,b=p.secondary.before,y=t.map((function(e){return e.stat})).join(","),O=Object(u.getFilterQuery)({filters:n,query:r}),j=f(f({},O),{},{after:Object(s.appendTimestamp)(p.primary.after,"start"),before:Object(s.appendTimestamp)(d,d.isSame(o()(),"day")?"now":"end"),stats:y}),g=f(f({},O),{},{after:Object(s.appendTimestamp)(p.secondary.after,"start"),before:Object(s.appendTimestamp)(b,b.isSame(o()(),"day")?"now":"end"),stats:y});return{primaryData:c("performance-indicators",j),primaryError:i("performance-indicators",j)||null,primaryRequesting:l("getReportItems",["performance-indicators",j]),secondaryData:c("performance-indicators",g),secondaryError:i("performance-indicators",g)||null,secondaryRequesting:l("getReportItems",["performance-indicators",g]),defaultDateRange:m}}},659:function(e,t,r){},666:function(e,t,r){"use strict";r.r(t);var n=r(5),a=r.n(n),c=r(20),o=r.n(c),i=r(15),s=r.n(i),u=r(22),l=r.n(u),m=r(23),p=r.n(m),d=r(10),f=r.n(d),b=r(0),y=r(3),O=r(181),j=r(29),g=r(35),v=r(25),h=r(34),w=r(74),_=r(42),E=r(50),k=(r(659),r(574)),P=r(592);function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function R(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=f()(e);if(t){var a=f()(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return p()(this,r)}}var T=Object(g.g)("dataEndpoints",{performanceIndicators:[]}).performanceIndicators,I=function(e){l()(r,e);var t=R(r);function r(){return o()(this,r),t.apply(this,arguments)}return s()(r,[{key:"renderMenu",value:function(){var e=this.props,t=e.hiddenBlocks,r=e.isFirst,n=e.isLast,a=e.onMove,c=e.onRemove,o=e.onTitleBlur,i=e.onTitleChange,s=e.onToggleHiddenBlock,u=e.titleInput,l=e.controls;return Object(b.createElement)(w.EllipsisMenu,{label:Object(y.__)("Choose which analytics to display and the section name","woocommerce-admin"),renderContent:function(e){var m=e.onToggle;return Object(b.createElement)(b.Fragment,null,Object(b.createElement)(w.MenuTitle,null,Object(y.__)("Display Stats:","woocommerce-admin")),T.map((function(e,r){var n=!t.includes(e.stat);return Object(b.createElement)(w.MenuItem,{checked:n,isCheckbox:!0,isClickable:!0,key:r,onInvoke:function(){s(e.stat)(),Object(E.recordEvent)("dash_indicators_toggle",{status:n?"off":"on",key:e.stat})}},e.label)})),window.wcAdminFeatures["analytics-dashboard/customizable"]&&Object(b.createElement)(l,{onToggle:m,onMove:a,onRemove:c,isFirst:r,isLast:n,onTitleBlur:o,onTitleChange:i,titleInput:u}))}})}},{key:"renderList",value:function(){var e=this.props,t=e.query,r=e.primaryRequesting,n=e.secondaryRequesting,a=e.primaryError,c=e.secondaryError,o=e.primaryData,i=e.secondaryData,s=e.userIndicators,u=e.defaultDateRange;if(r||n)return Object(b.createElement)(w.SummaryListPlaceholder,{numberOfItems:s.length});if(a||c)return null;var l=Object(j.getPersistedQuery)(t),m="previous_period"===Object(_.getDateParamsFromQuery)(t,u).compare?Object(y.__)("Previous Period:","woocommerce-admin"):Object(y.__)("Previous Year:","woocommerce-admin"),p=this.context,d=p.formatAmount,f=(0,p.getCurrencyConfig)();return Object(b.createElement)(w.SummaryList,null,(function(){return s.map((function(e,t){var r=Object(P.b)({indicator:e,primaryData:o,secondaryData:i,currency:f,formatAmount:d,persistedQuery:l}),n=r.primaryValue,a=r.secondaryValue,c=r.delta,s=r.reportUrl,u=r.reportUrlType;return Object(b.createElement)(w.SummaryNumber,{key:t,href:s,hrefType:u,label:e.label,value:n,prevLabel:m,prevValue:a,delta:c,onLinkClickCallback:function(){Object(E.recordEvent)("dash_indicators_click",{key:e.stat})}})}))}))}},{key:"render",value:function(){var e=this.props,t=e.userIndicators,r=e.title;return Object(b.createElement)(b.Fragment,null,Object(b.createElement)(w.SectionHeader,{title:r||Object(y.__)("Store Performance","woocommerce-admin"),menu:this.renderMenu()}),t.length>0&&Object(b.createElement)("div",{className:"woocommerce-dashboard__store-performance"},this.renderList()))}}]),r}(b.Component);I.contextType=k.a,t.default=Object(O.a)(Object(v.withSelect)((function(e,t){var r=t.hiddenBlocks,n=t.query,a=t.filters,c=T.filter((function(e){return!r.includes(e.stat)})),o=e(h.SETTINGS_STORE_NAME).getSetting("wc_admin","wcAdminSettings").woocommerce_default_date_range,i={hiddenBlocks:r,userIndicators:c,indicators:T,defaultDateRange:o};if(0===c.length)return i;var s=Object(P.a)(e,c,n,a);return D(D({},i),s)})))(I)}}]);