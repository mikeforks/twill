import{n as d,A as x,D as v,a as y,V as I,d as T,m as E,b as B,c as r,e as u,g as l,N as _,f,h as A,i as S,s as c,j as C,k as D,o as U}from"./form.3ed58db1.js";import{T as P}from"./index.a3183894.js";import{a as O}from"./Paginate.a60b2bf7.js";import{a as F}from"./Fieldset.e2160e02.js";import{g as R}from"./pushState.5b409387.js";import{l as $}from"./language.2baf5859.js";import"./toggleVisibility.ff8a4ceb.js";const M="addToBucket",K="deleteFromBucket",N="toggleFeaturedInBucket",L="reorderBucketList",G="updateBucketsDataSource",V="updateBucketsData",j="updateBucketsFilter",z="updateBucketsDataOffset",X="updateBucketsDataPage",q="updateBucketsMaxPage";var o={ADD_TO_BUCKET:M,DELETE_FROM_BUCKET:K,TOGGLE_FEATURED_IN_BUCKET:N,REORDER_BUCKET_LIST:L,UPDATE_BUCKETS_DATASOURCE:G,UPDATE_BUCKETS_DATA:V,UPDATE_BUCKETS_FILTER:j,UPDATE_BUCKETS_DATA_OFFSET:z,UPDATE_BUCKETS_DATA_PAGE:X,UPDATE_BUCKETS_MAX_PAGE:q},k={props:{buckets:{type:Array,default:()=>[]},item:{type:Object},singleBucket:{type:Boolean,default:!0}},computed:{bucketClasses:function(){return{selected:this.type!=="bucket"&&this.inBuckets,single:this.singleBucket}}},methods:{addToBucket:function(t=this.bucket){this.$emit("add-to-bucket",this.item,t)},inBucketById:function(t){const a=this.buckets.findIndex(i=>i.id===t);return a===-1?void 0:!!this.buckets[a].children.find(i=>i.id===this.item.id&&i.content_type.value===this.item.content_type.value)},restrictedBySource:function(t){const a=this.buckets.find(i=>i.id===t);if(!a)return!1;if(!a.hasOwnProperty("acceptedSources")||a.acceptedSources.length===0)return!0;const e=this.item.content_type.value;return a.acceptedSources.findIndex(i=>i===e)!==-1}}},H=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("tr",{staticClass:"buckets__item",class:t.customClasses},[t.draggable?e("td",{staticClass:"drag__handle"},[e("div",{staticClass:"drag__handle--drag"})]):t._e(),t.item.thumbnail?e("td",{staticClass:"buckets__itemThumbnail"},[e("img",{attrs:{src:t.item.thumbnail,alt:t.item.name}})]):t._e(),t.withToggleFeatured?e("td",{staticClass:"buckets__itemStarred",class:{"buckets__itemStarred--active":t.item.starred}},[e("span",{directives:[{name:"tooltip",rawName:"v-tooltip"}],attrs:{"data-tooltip-title":t.item.starred?t.toggleFeaturedLabels.unstar?t.toggleFeaturedLabels.unstar:"Unfeature":t.toggleFeaturedLabels.star?t.toggleFeaturedLabels.star:"Feature"},on:{click:function(i){return i.preventDefault(),t.toggleFeatured(i)}}},[e("span",{directives:[{name:"svg",rawName:"v-svg"}],attrs:{symbol:"star-feature_active"}}),e("span",{directives:[{name:"svg",rawName:"v-svg"}],attrs:{symbol:"star-feature"}})])]):t._e(),e("td",{staticClass:"buckets__itemTitle"},[e("h4",[t.item.edit?e("span",{staticClass:"f--link-underlined--o"},[e("a",{attrs:{href:t.item.edit,target:"_blank"}},[t._v(t._s(t.item.name))])]):e("span",[t._v(t._s(t.item.name))])])]),t.item.content_type&&!t.singleSource?e("td",{staticClass:"buckets__itemContentType"},[t._v(" "+t._s(t.item.content_type.label)+" ")]):t._e(),e("td",{staticClass:"buckets__itemOptions"},[t.singleBucket?t._e():e("a17-dropdown",{ref:"bucketDropdown",staticClass:"item__dropdown bucket__action",attrs:{position:"bottom-right",title:"Featured in",clickable:!0}},[e("a17-button",{attrs:{variant:"icon"},on:{click:function(i){return t.$refs.bucketDropdown.toggle()}}},[e("span",{directives:[{name:"svg",rawName:"v-svg"}],attrs:{symbol:"more-dots"}})]),t.restricted?e("div",{staticClass:"item__dropdown__content",attrs:{slot:"dropdown__content"},slot:"dropdown__content"},[e("a17-radiogroup",{attrs:{name:"bucketsSelection",radioClass:"bucket",radios:t.dropDownBuckets,initialValue:t.selectedBuckets()[0]},on:{change:t.updateBucket}})],1):e("div",{staticClass:"item__dropdown__content",attrs:{slot:"dropdown__content"},slot:"dropdown__content"},[e("a17-checkboxgroup",{attrs:{name:"bucketsSelection",options:t.dropDownBuckets,selected:t.selectedBuckets()},on:{change:t.updateBucket}})],1)],1),e("a17-button",{staticClass:"bucket__action",attrs:{icon:"close"},on:{click:function(i){return t.removeFromBucket()}}},[e("span",{directives:[{name:"svg",rawName:"v-svg"}],attrs:{symbol:"close_icon"}})])],1)])},Q=[];const W={components:{A17Dropdown:x},name:"a17BucketItem",props:{bucket:{type:String},draggable:{type:Boolean,default:!1},restricted:{type:Boolean,default:!1},type:{type:String,default:"bucket"},singleSource:{type:Boolean,default:!1},withToggleFeatured:{type:Boolean,default:!1},toggleFeaturedLabels:{type:Array,default:()=>[]}},mixins:[k],computed:{inBuckets:function(){const t=this;let a=!1;return t.buckets.forEach(function(e){e.children.find(function(i){return i.id===t.item.id&&i.content_type.value===t.item.content_type.value})&&(a=!0)}),a},customClasses:function(){return{...this.bucketClasses,draggable:this.draggable}},dropDownBuckets:function(){const t=[],a=this;let e=1;return this.buckets.length>0&&this.buckets.forEach(function(i){a.restrictedBySource(i.id)&&t.push({value:a.slug(i.id),label:e+" "+i.name}),e++}),t}},methods:{removeFromBucket:function(t=this.bucket){this.$emit("remove-from-bucket",this.item,t)},toggleFeatured:function(){this.$emit("toggle-featured-in-bucket",this.item,this.bucket)},selectedBuckets:function(){const t=[],a=this;return this.buckets.length>0&&this.buckets.forEach(function(e){a.inBucketById(e.id)&&t.push(a.slug(e.id))}),t.length>0?t:[]},slug:function(t){return"bucket-"+this.bucket+"_item-"+this.item.id+"_type-"+this.item.content_type.value+"_inb-"+t},updateBucket:function(t){const a="inb-",e=this,i=e.selectedBuckets();if(e.restricted){const n=t.split(a)[1];e.inBucketById(n)||(e.$refs.bucketDropdown.toggle(),e.addToBucket(n));return}i.forEach(function(n){if(t.indexOf(n)===-1){const s=n.split(a)[1];e.$refs.bucketDropdown.toggle(),e.removeFromBucket(s)}}),Array.isArray(t)&&t.forEach(function(n){const s=n.split(a)[1];e.inBucketById(s)||(e.$refs.bucketDropdown.toggle(),e.addToBucket(s))})}}},m={};var Y=d(W,H,Q,!1,J,"4a565850",null,null);function J(t){for(let a in m)this[a]=m[a]}var Z=function(){return Y.exports}(),tt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("tr",{staticClass:"buckets__item",class:t.bucketClasses},[t.item.thumbnail?e("td",{staticClass:"buckets__itemThumbnail"},[e("img",{attrs:{src:t.item.thumbnail,alt:t.item.name}})]):t._e(),e("td",{staticClass:"buckets__itemTitle"},[e("h4",[t.item.edit?e("span",{staticClass:"f--link-underlined--o"},[e("a",{attrs:{href:t.item.edit,target:"_blank"}},[t._v(t._s(t.item.name))])]):e("span",[t._v(t._s(t.item.name))]),t.item.languages?[e("br"),e("a17-tableLanguages",{attrs:{languages:t.item.languages}})]:t._e()],2)]),t.item.publication?e("td",{staticClass:"buckets__itemDate"},[t._v(" "+t._s(t.item.publication)+" ")]):t._e(),e("td",{staticClass:"buckets__itemOptions"},[t.singleBucket&&!t.inBucketById(t.buckets[0].id)?e("a17-button",{attrs:{icon:"add"},on:{click:function(i){return t.addToBucket(t.buckets[0].id)}}},[e("span",{directives:[{name:"svg",rawName:"v-svg"}],attrs:{symbol:"add"}})]):t.singleBucket?e("a17-button",{attrs:{icon:"add",disabled:!0}},[e("span",{directives:[{name:"svg",rawName:"v-svg"}],attrs:{symbol:"add"}})]):t._l(t.buckets,function(i,n){return[!t.inBucketById(i.id)&&t.restrictedBySource(i.id)?e("a17-button",{key:i.id,staticClass:"bucket__action",attrs:{icon:"bucket--"+(n+1)},on:{click:function(s){return t.addToBucket(i.id)}}},[t._v(t._s(n+1))]):t.restrictedBySource(i.id)?e("a17-button",{key:i.id,staticClass:"bucket__action selected",attrs:{icon:"bucket--"+(n+1),disabled:!0}},[t._v(t._s(n+1))]):t._e()]})],2)])},et=[];const at={mixins:[k],components:{"a17-tableLanguages":P}},p={};var it=d(at,tt,et,!1,nt,null,null,null);function nt(t){for(let a in p)this[a]=p[a]}var st=function(){return it.exports}(),ot=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"buckets"},[e("div",{staticClass:"buckets__page-title"},[e("div",{staticClass:"container buckets__page-title-content"},[e("h2",[t._t("default")],2),e("div",{staticClass:"buckets__page-title-actions"},[e("a17-button",{attrs:{variant:"validate"},on:{click:t.save}},[t._v(t._s(t.$trans("buckets.publish")))]),t._l(t.extraActions,function(i){return e("a17-button",{key:i.url,attrs:{el:"a",href:i.url,download:i.download||"",target:i.target||"",rel:i.rel||"",variant:"secondary"}},[t._v(t._s(i.label))])})],2)])]),e("div",{staticClass:"container"},[e("div",{staticClass:" wrapper"},[e("div",{staticClass:"buckets__container col--even"},[e("a17-fieldset",{staticClass:"buckets__fieldset",attrs:{title:t.title,activeToggle:!1}},[e("div",{staticClass:"buckets__header"},[e("div",{staticClass:"buckets__sources"},[t.singleSource?t._e():e("a17-vselect",{staticClass:"sources__select",attrs:{name:"sources",selected:t.currentSource,options:t.dataSources,required:!0},on:{change:t.changeDataSource}})],1),e("div",{staticClass:"buckets__filter"},[e("a17-filter",{on:{submit:t.filterBucketsData}})],1)]),t.source.items.length>0?e("table",{staticClass:"buckets__list"},[e("tbody",t._l(t.source.items,function(i){return e("a17-bucket-item-source",{key:i.id,attrs:{item:i,singleBucket:t.singleBucket,buckets:t.buckets},on:{"add-to-bucket":t.addToBucket}})}),1)]):e("div",{staticClass:"buckets__empty"},[e("h4",[t._v(t._s(t.emptySource))])]),e("a17-paginate",{attrs:{max:t.max,value:t.page,offset:t.offset,availableOffsets:t.availableOffsets},on:{changePage:t.updatePage,changeOffset:t.updateOffset}})],1)],1),e("div",{staticClass:"buckets__container col--even"},t._l(t.buckets,function(i,n){return e("a17-fieldset",{key:i.id,class:"buckets__fieldset buckets__fieldset--"+(n+1),attrs:{name:"bucket_"+i.id,activeToggle:!1}},[e("h3",{staticClass:"buckets__fieldset__header",attrs:{slot:"header"},slot:"header"},[e("span",[t.buckets.length>1?e("span",{staticClass:"buckets__number"},[t._v(t._s(n+1))]):t._e(),t._v(" "+t._s(i.name))]),t._v(" "),e("span",{staticClass:"buckets__size-infos"},[t._v(t._s(i.children.length)+" / "+t._s(i.max))])]),i.children.length>0?e("draggable",{staticClass:"buckets__list buckets__draggable",attrs:{options:t.dragOptions,value:i.children,tag:"table"},on:{change:function(s){return t.sortBucket(s,n)}}},[e("transition-group",{attrs:{name:"fade_scale_list",tag:"tbody"}},t._l(i.children,function(s,w){return e("a17-bucket-item",{key:s.id+"_"+w,attrs:{item:s,restricted:t.restricted,draggable:i.children.length>1,singleBucket:t.singleBucket,singleSource:t.singleSource,bucket:i.id,buckets:t.buckets,withToggleFeatured:i.withToggleFeatured,toggleFeaturedLabels:i.toggleFeaturedLabels},on:{"add-to-bucket":t.addToBucket,"remove-from-bucket":t.deleteFromBucket,"toggle-featured-in-bucket":t.toggleFeaturedInBucket}})}),1)],1):e("div",{staticClass:"buckets__empty"},[e("h4",[t._v(t._s(t.emptyBuckets))])])],1)}),1)])]),e("a17-modal",{ref:"overrideBucket",staticClass:"modal--tiny modal--form modal--withintro",attrs:{title:"Override Bucket"}},[e("p",{staticClass:"modal--tiny-title"},[e("strong",[t._v("Are you sure ?")])]),e("p",{domProps:{innerHTML:t._s(t.overrideBucketText)}}),e("a17-inputframe",[e("a17-button",{attrs:{variant:"validate"},on:{click:t.override}},[t._v("Override")]),e("a17-button",{attrs:{variant:"aslink"},on:{click:function(i){return t.$refs.overrideBucket.close()}}},[e("span",[t._v("Cancel")])])],1)],1)],1)},rt=[];const ct={name:"A17Buckets",mixins:[v],props:{title:{type:String,default:"Features"},emptyBuckets:{type:String,default:"No items selected."},emptySource:{type:String,default:"No items found."},overridableMax:{type:Boolean,default:!1},restricted:{type:Boolean,default:!0},extraActions:{type:Array,default:function(){return[]}}},components:{"a17-bucket-item":Z,"a17-bucket-item-source":st,"a17-fieldset":F,"a17-paginate":O,"a17-filter":y,"a17-vselect":I,draggable:T},data:function(){return{currentBucketID:"",currentItem:"",overrideItem:!1}},computed:{...E({buckets:t=>t.buckets.buckets,source:t=>t.buckets.source,dataSources:t=>t.buckets.dataSources.content_types,page:t=>t.buckets.page,availableOffsets:t=>t.buckets.availableOffsets,offset:t=>t.buckets.offset,max:t=>t.buckets.maxPage}),...B(["currentSource"]),singleBucket:function(){return this.buckets.length===1},singleSource:function(){return this.dataSources.length===1},overrideBucketText:function(){const t=this.buckets.find(i=>i.id===this.currentBucketID);let a="",e="";return t&&(a=t.name,e=t.max),'Bucket <em>"'+a+'"</em> has a strict limit of '+e+" items. Do you want to override the first item of this bucket ?"}},methods:{addToBucket:function(t,a){const e=this.buckets.findIndex(s=>s.id===a);if(!t&&e===-1)return;this.currentBucketID=a,this.currentItem=t;const i={index:e,item:t},n=this.buckets[e].children.length;n>-1&&n<this.buckets[e].max?(this.checkRestriced(t),this.$store.commit(o.ADD_TO_BUCKET,i)):this.overridableMax||this.overrideItem?(this.checkRestriced(t),this.$store.commit(o.ADD_TO_BUCKET,i),this.$store.commit(o.DELETE_FROM_BUCKET,{index:e,itemIndex:0}),this.overrideItem=!1):this.$refs.overrideBucket.open()},deleteFromBucket:function(t,a){const e=this.buckets.findIndex(s=>s.id===a);if(e===-1)return;const i=this.buckets[e].children.findIndex(s=>s.id===t.id&&s.content_type.value===t.content_type.value);if(i===-1)return;const n={index:e,itemIndex:i};this.$store.commit(o.DELETE_FROM_BUCKET,n)},toggleFeaturedInBucket:function(t,a){const e=this.buckets.findIndex(s=>s.id===a);if(e===-1)return;const i=this.buckets[e].children.findIndex(s=>s.id===t.id&&s.content_type.value===t.content_type.value);if(i===-1)return;const n={index:e,itemIndex:i};this.$store.commit(o.TOGGLE_FEATURED_IN_BUCKET,n)},checkRestriced:function(t){this.restricted&&this.buckets.forEach(a=>{a.children.forEach(e=>{e.id===t.id&&e.content_type.value===t.content_type.value&&this.deleteFromBucket(t,a.id)})})},sortBucket:function(t,a){const e={bucketIndex:a,oldIndex:t.moved.oldIndex,newIndex:t.moved.newIndex};this.$store.commit(o.REORDER_BUCKET_LIST,e)},changeDataSource:function(t){this.$store.commit(o.UPDATE_BUCKETS_DATASOURCE,t),this.$store.commit(o.UPDATE_BUCKETS_DATA_PAGE,1),this.$store.dispatch(r.GET_BUCKETS)},filterBucketsData:function(t){this.$store.commit(o.UPDATE_BUCKETS_DATA_PAGE,1),this.$store.commit(o.UPDATE_BUCKETS_FILTER,t||{search:""}),this.$store.dispatch(r.GET_BUCKETS)},updateOffset:function(t){this.$store.commit(o.UPDATE_BUCKETS_DATA_PAGE,1),this.$store.commit(o.UPDATE_BUCKETS_DATA_OFFSET,t),this.$store.dispatch(r.GET_BUCKETS)},updatePage:function(t){this.$store.commit(o.UPDATE_BUCKETS_DATA_PAGE,t),this.$store.dispatch(r.GET_BUCKETS)},override:function(){this.overrideItem=!0,this.addToBucket(this.currentItem,this.currentBucketID),this.$refs.overrideBucket.close()},save:function(){this.$store.dispatch(r.SAVE_BUCKETS)}}},h={};var dt=d(ct,ot,rt,!1,ft,"3e257525",null,null);function ft(t){for(let a in h)this[a]=h[a]}var ut=function(){return dt.exports}();const g="BUCKETS";var b={get:function(t,a,e){u.get(R(),{params:t}).then(i=>{a&&typeof a=="function"&&a(i.data)}).catch(i=>{l(g,{message:"Get Buckets error",value:i}),e&&typeof e=="function"&&e(i)})},save(t,a,e,i){u.post(t,a).then(n=>{e&&typeof e=="function"&&e(n)}).catch(n=>{l(g,{message:"Buckets save error.",value:n}),i&&typeof i=="function"&&i(n)})}};const lt={saveUrl:window[{}.VUE_APP_NAME].STORE.buckets.saveUrl||"",dataSources:window[{}.VUE_APP_NAME].STORE.buckets.dataSources||{},source:window[{}.VUE_APP_NAME].STORE.buckets.source||{},buckets:window[{}.VUE_APP_NAME].STORE.buckets.items||[],filter:window[{}.VUE_APP_NAME].STORE.buckets.filter||{},page:window[{}.VUE_APP_NAME].STORE.buckets.page||1,maxPage:window[{}.VUE_APP_NAME].STORE.buckets.maxPage||10,offset:window[{}.VUE_APP_NAME].STORE.buckets.offset||10,availableOffsets:window[{}.VUE_APP_NAME].STORE.buckets.availableOffsets||[10,20,30]},_t={currentSource:t=>t.source.content_type},mt={[o.ADD_TO_BUCKET](t,a){t.buckets[a.index].children.push(a.item)},[o.DELETE_FROM_BUCKET](t,a){t.buckets[a.index].children.splice(a.itemIndex,1)},[o.TOGGLE_FEATURED_IN_BUCKET](t,a){const e=t.buckets[a.index].children.splice(a.itemIndex,1);e[0].starred=!e[0].starred,t.buckets[a.index].children.splice(a.itemIndex,0,e[0])},[o.UPDATE_BUCKETS_DATASOURCE](t,a){t.dataSources.selected.value!==a.value&&(t.dataSources.selected=a)},[o.UPDATE_BUCKETS_DATA](t,a){t.source=Object.assign({},t.source,a)},[o.UPDATE_BUCKETS_FILTER](t,a){t.filter=Object.assign({},t.filter,a)},[o.REORDER_BUCKET_LIST](t,a){const e=t.buckets[a.bucketIndex].children.splice(a.oldIndex,1);t.buckets[a.bucketIndex].children.splice(a.newIndex,0,e[0])},[o.UPDATE_BUCKETS_DATA_OFFSET](t,a){t.offset=a},[o.UPDATE_BUCKETS_DATA_PAGE](t,a){t.page=a},[o.UPDATE_BUCKETS_MAX_PAGE](t,a){t.maxPage=a}},pt={[r.GET_BUCKETS]({commit:t,state:a}){b.get({content_type:a.dataSources.selected.value,page:a.page,offset:a.offset,filter:a.filter},e=>{t(o.UPDATE_BUCKETS_DATA,e.source),t(o.UPDATE_BUCKETS_MAX_PAGE,e.maxPage)})},[r.SAVE_BUCKETS]({commit:t,state:a}){const e={};a.buckets.forEach(i=>{const n=[];i.children.forEach(s=>{n.push({id:s.id,type:s.content_type.value,starred:s.starred})}),e[i.id]=n}),b.save(a.saveUrl,{buckets:e},i=>{t(_.SET_NOTIF,{message:"Features saved. All good!",variant:"success"})},i=>{t(_.SET_NOTIF,{message:"Your submission could not be validated, please fix and retry",variant:"error"})})}};var ht={state:lt,getters:_t,mutations:mt,actions:pt};f.use(A);f.use(S);c.registerModule("buckets",ht);c.registerModule("language",$);c.registerModule("form",C);window[{}.VUE_APP_NAME].vm=window.vm=new f({store:c,el:"#app",components:{"a17-buckets":ut},created:function(){U()}});document.addEventListener("DOMContentLoaded",D);
