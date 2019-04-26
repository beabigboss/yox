!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).Yox=e()}(this,function(){"use strict";var t=!0,e=!1,n=null,r=void 0,i="length",o="function",s="undefined"!=typeof window?window:r,u="undefined"!=typeof document?document:r,c={},f=[],a="";function p(t){return t!==r}var h=Object.prototype.toString;function v(t,e){return"numeric"===e?x(t):h.call(t).toLowerCase()==="[object "+e+"]"}function l(t){return typeof t===o}function d(t){return Array.isArray(t)}function y(t){return t!==n&&"object"==typeof t}function m(t){return"string"==typeof t}function g(t){return"number"==typeof t}function b(t){return"boolean"==typeof t}function x(t){return g(t)||m(t)&&!isNaN(parseFloat(t))&&isFinite(t)}var w=Object.freeze({is:v,func:l,array:d,object:y,string:m,number:g,boolean:b,numeric:x});function $(t,e,n){if(l(t))return d(n)?t.apply(e,n):p(e)?t.call(e,n):p(n)?t(n):t()}var k=function(t,e){this.type=t,this.originalEvent=e};function T(t,n,r){var i=t.length;if(i)if(r)for(var o=i-1;o>=0&&n(t[o],o,t)!==e;o--);else for(var s=0;s<i&&n(t[s],s,t)!==e;s++);}function C(t,e){return t.join(e)}function E(t,e){t[t.length]=e}function O(t,e){t.unshift(e)}function j(t,e,n){d(e)?T(e,function(e){n(t,e)}):n(t,e)}function A(t,e){j(t,e,E)}function P(t,e){j(t,e,O)}function z(t,e,n){var r={};return T(t,function(t){r[e?t[e]:t]=n||t}),r}function D(t,n,r){var i=-1;return T(t,function(t,o){if(r===e?t==n:t===n)return i=o,e}),i}function S(t,e,n){return D(t,e,n)>=0}function q(n,r,i){var o=0;return T(n,function(t,s){(i===e?t==r:t===r)&&(n.splice(s,1),o++)},t),o}function I(t){return!d(t)||!t.length}k.prototype.preventDefault=function(){if(!this.isPrevented){var e=this.originalEvent;e&&e.preventDefault(),this.isPrevented=t}return this},k.prototype.stopPropagation=function(){if(!this.isStoped){var e=this.originalEvent;e&&e.stopPropagation(),this.isStoped=t}return this},k.prototype.prevent=function(){return this.preventDefault()},k.prototype.stop=function(){return this.stopPropagation()};var M=Object.freeze({each:T,join:C,push:A,unshift:P,toArray:function(t){return d(t)?t:$([].slice,t)},toObject:z,indexOf:D,has:S,last:function(t){var e=t.length;if(e>0)return t[e-1]},pop:function(t){return t.pop()},remove:q,falsy:I}),Y=/-([a-z])/gi,K=/\B([A-Z])/g,L={},U={};function B(t,e,n){return g(n)?e===n?a:t.slice(e,n):t.slice(e)}function N(t,e,n){return t.indexOf(e,p(n)?n:0)}function F(t,e,n){return t.lastIndexOf(e,p(n)?n:t.length)}function W(t,e){return N(t,e)>=0}function G(t,e){return 0===N(t,e)}function J(t,e){return t.charCodeAt(e||0)}function R(t){return!m(t)||!t.length}var V=Object.freeze({camelize:function(t){return L[t]||(L[t]=t.replace(Y,function(t,e){return e.toUpperCase()})),L[t]},hyphenate:function(t){return U[t]||(U[t]=t.replace(K,function(t,e){return"-"+e.toLowerCase()})),U[t]},trim:function(t){return R(t)?a:t.trim()},slice:B,indexOf:N,lastIndexOf:F,has:W,startsWith:G,endsWith:function(t,e){var n=t.length-e.length;return n>=0&&F(t,e)===n},charAt:function(t,e){return t.charAt(e||0)},codeAt:J,falsy:R});function Z(t,e){return t!=n&&t.toString?t.toString():p(e)?e:a}var H=".",Q={};function X(t,e){return t===e?e.length:G(t,e+=H)?e.length:-1}function _(n,r){if(R(n))r(n,t);else for(var i=0,o=0;t;){if(!((o=N(n,H,i))>0)){r(B(n,i),t);break}if(r(B(n,i,o),e)===e)break;i=o+1}}function tt(t){return m(t)?t:g(t)?Z(t):a}function et(t,e){var n=Q[e];n||(n=e.replace(/\./g,"\\.").replace(/\*\*/g,"([.\\w]+?)").replace(/\*/g,"(\\w+)"),n=Q[e]=new RegExp("^"+n+"$"));var r=t.match(n);if(r)return r[1]}function nt(t){return Object.keys(t)}function rt(t,e){return t.length-e.length}function it(t,e){return e.length-t.length}function ot(t,e){return nt(t).sort(e?it:rt)}function st(t,n){for(var r in t)if(n(t[r],r)===e)break}function ut(t,e){return p(t[e])||t.hasOwnProperty(e)}function ct(t){st(t,function(e,n){delete t[n]})}function ft(t){for(var e=[],n=arguments.length-1;n-- >0;)e[n]=arguments[n+1];return T(e,function(e){st(e,function(e,n){t[n]=e})}),t}function at(t,e){var n=t;return d(t)?e?(n=[],T(t,function(t,r){n[r]=at(t,e)})):n=t.slice():y(t)&&(n={},st(t,function(t,r){n[r]=e?at(t,e):t})),n}var pt={};function ht(t,i){return _(i,function(i,o){if(t==n)return t=r,e;var s=t[i],u=p(s)||t.hasOwnProperty(i);s&&l(s.get)&&(s=s.get()),o?u?(pt.value=s,t=pt):t=r:t=s}),t}function vt(t,n,r,i){_(n,function(n,o){if(o)t[n]=r;else if(t[n])t=t[n];else{if(!i)return e;t=t[n]={}}})}var lt=Object.freeze({keys:nt,falsy:function(t){return!y(t)||d(t)||!nt(t).length},sort:ot,each:st,has:ut,clear:ct,extend:ft,copy:at,get:ht,set:vt}),dt="undefined"!=typeof console?console:n,yt=/yox/.test(Z(function(){}));function mt(){if(s){var t=s.DEBUG;if(b(t))return t}return yt}function gt(t){dt&&mt()&&dt.warn("[Yox warn]: "+t)}var bt=Object.freeze({log:function(t){dt&&mt()&&dt.log("[Yox log]: "+t)},warn:gt,error:function(t){dt&&dt.error("[Yox error]: "+t)},fatal:function(t){throw new Error("[Yox fatal]: "+t)}}),xt=function(t){this.ns=t||e,this.listeners={}};function wt(t,e){var n={name:e,ns:a};if(t){var r=N(e,".");r>=0&&(n.name=B(e,0,r),n.ns=B(e,r+1))}return n}function $t(e){return y(e)?function(t){return e===t}:l(e)?function(t){return e===t.fn}:function(e){return t}}function kt(t,e){return!t.length||t===e.ns}function Tt(t){return l(t)&&/native code/.test(Z(t))}xt.prototype.fire=function(n,r,i){var o,s,u;n instanceof k?(o=n,s=n.type,u=y(r)?[o,r]:o):(s=n,r&&(u=r));var c=this,f=wt(c.ns,s),a=f.name,p=f.ns,h=c.listeners[a],v=t;return h&&T(at(h),function(t,n,f){if((i?i(t,r):kt(p,t))&&S(f,t)){o&&(o.listener=t.fn);var a=$(t.fn,t.ctx,u);return t.num=t.num?t.num+1:1,t.num===t.max&&c.off(s,t),o&&(a===e?o.prevent().stop():o.isStoped&&(a=e)),a===e?v=e:void 0}}),v},xt.prototype.has=function(n,r){var i=this.listeners,o=wt(this.ns,n),s=o.name,u=o.ns,c=t,f=$t(r),a=function(t){return T(t,function(t){if(f(t)&&kt(u,t))return c=e}),c};return s?i[s]&&a(i[s]):u&&st(i,a),!c},xt.prototype.on=function(t,e,n){var r=this,i=r.listeners,o=function(t,e){if(t){var o=l(t)?{fn:t}:t;if(y(o)&&l(o.fn)){n&&ft(o,n);var s=wt(r.ns,e),u=s.name,c=s.ns;return o.ns=c,void A(i[u]||(i[u]=[]),o)}}};m(t)?o(e,t):st(t,o)},xt.prototype.off=function(e,n){var r=this.listeners;if(e){var i=wt(this.ns,e),o=i.name,s=i.ns,u=$t(n),c=function(e,n){T(e,function(t,e,n){u(t)&&kt(s,t)&&n.splice(e,1)},t),e.length||delete r[n]};o?r[o]&&c(r[o],o):s&&st(r,c)}else this.listeners={}},typeof setImmediate===o&&Tt(setImmediate)&&setImmediate;var Ct,Et=typeof MessageChannel===o&&Tt(MessageChannel)?function(t){var e=new MessageChannel;e.port1.onmessage=t,e.port2.postMessage(1)}:setTimeout,Ot=function(){this.nextTasks=[]};Ot.shared=function(){return Ct||(Ct=new Ot),Ct},Ot.prototype.append=function(t){A(this.nextTasks,t),this.start()},Ot.prototype.prepend=function(t){P(this.nextTasks,t),this.start()},Ot.prototype.start=function(){var t=this;1===t.nextTasks.length&&Et(function(){t.run()})},Ot.prototype.clear=function(){this.nextTasks.length=0},Ot.prototype.run=function(){var t=this.nextTasks;t.length&&(this.nextTasks=[],T(t,$))};function jt(t,e){return x(t)?+t:p(e)?e:0}At=a,JSON.stringify(At),C(["c","d","e","f","g","a","h","i","b"],",");var At,Pt={sync:t},zt={sync:e},Dt=function(e,n,r,i,o,s,u){var c=this;c.keypath=e,c.sync=n,c.cache=r,c.deps=[],c.context=o.context,c.observer=o,c.getter=s,c.setter=u,c.unique={},c.callback=function(n,r,i){var s=c.value,u=c.get(t);u!==s&&o.diff(e,u,s)},(c.fixed=!I(i))&&(T(i,function(t){c.add(t)}),c.bind())};function St(t,n){var r;return T(t,function(t){var i=X(n,t);if(i>=0)return r={name:t,prop:B(n,i)},e}),r}function qt(t,e){if(t==n||e===a)return t;var r=ht(t,e);return r?r.value:void 0}function It(e,n,o,s,u){var f=function(t,n,r){if(n!==r){var i=(c=t,o=tt(o=e),c=tt(c),o===a?c:c!==a?o+H+c:o);T(s,function(t){p(et(i,t))&&u(t,i,n,r)}),It(i,n,r,s,u)}var o,c};(function(e,n,o){var s=m(e),u=m(n);if(s||u)return o(i,s?e.length:r,u?n.length:r),t})(n,o,f)||function(e,n,o){var s=d(e),u=d(n);if(s||u){var c=s?e.length:r,f=u?n.length:r;o(i,c,f);for(var a=0,p=Math.max(c||0,f||0);a<p;a++)o(a,e?e[a]:r,n?n[a]:r);return t}}(n,o,f)||function(t,e,n){var r=y(t),i=y(e);(r||i)&&(t=r?t:c,e=i?e:c,r&&st(t,function(t,r){t!==e[r]&&n(r,t,e[r])}),i&&st(e,function(e,r){e!==t[r]&&n(r,t[r],e)}))}(n,o,f)}function Mt(t,e,n,r,i,o){var s;st(r,function(r,u){if(function(t){return W(t,"*")}(u))p(et(t,u))?o(u,t,e,n):i&&(s?A(s,u):s=[u]);else{var c=X(u,t);if(c>=0){var f=B(u,c),a=qt(e,f),h=qt(n,f);a!==h&&o(u,u,a,h)}}}),s&&It(t,e,n,s,o)}function Yt(t,e){if(t.count&&e)return t.count--,e[0]!==e[1]}function Kt(e){return e===t?{immediate:t}:y(e)?at(e):{}}Dt.build=function(e,n,r){var i,o,s=t,u=t,c=f;if(l(r)?i=r:y(r)&&(b(r.cache)&&(s=r.cache),b(r.sync)&&(u=r.sync),d(r.deps)&&(c=r.deps),l(r.get)&&(i=r.get),l(r.set)&&(o=r.set)),i)return new Dt(e,u,s,c,n,i,o)},Dt.prototype.get=function(t){var e=this.getter,n=this.context;if(this.cache){if(t||!ut(this,"value"))if(this.fixed)this.value=$(e,n);else{this.unbind();var r=Dt.current;Dt.current=this,this.value=$(e,n),this.bind(),Dt.current=r}}else this.value=$(e,n);return this.value},Dt.prototype.set=function(t){var e=this.setter,n=this.context;e&&e.call(n,t)},Dt.prototype.add=function(e){this.unique[e]=t},Dt.prototype.bind=function(){var t=this.unique,e=this.deps,n=this.observer,r=this.callback,i=this.sync;st(t,function(t,o){A(e,o),n.watch(o,r,i?Pt:zt)}),this.unique={}},Dt.prototype.unbind=function(){var e=this.deps,n=this.observer,r=this.callback;T(e,function(t){n.unwatch(t,r)},t),e.length=0};var Lt=function(t,e){this.data=t||{},this.context=e||this,this.nextTask=new Ot,this.syncEmitter=new xt,this.asyncEmitter=new xt,this.asyncChanges={}};Lt.prototype.get=function(t,e,n){var r,i,o=Dt.current,s=this.data,u=this.computed,c=this.reversedComputedKeys;if(t===a)return s;if(o&&!n&&o.add(t),u){if(i=u[t])return i.get();if(c){var f=St(c,t);f&&f.prop&&(r=ht(u[f.name].get(),f.prop))}}return r||(r=ht(s,t)),r?r.value:e},Lt.prototype.set=function(t,e){var n=this,r=n.data,i=n.computed,o=n.reversedComputedKeys,s=function(t,e){var s=n.get(e);if(t!==s){var u;if(i&&((u=i[e])&&u.set(t),o)){var c=St(o,e);if(c&&c.prop&&(u=i[c.name])){var f=u.get();(y(f)||d(f))&&vt(f,c.prop,t)}}u||vt(r,e,t),n.diff(e,t,s)}};m(t)?s(e,t):y(t)&&st(t,s)},Lt.prototype.diff=function(e,n,i){var o=this,s=o.syncEmitter,u=o.asyncEmitter,c=o.asyncChanges,f=36!==J(e);Mt(e,n,i,s.listeners,f,function(t,e,n,r){s.fire(t,[n,r,e])}),Mt(e,n,i,u.listeners,f,function(e,n,i,s){T(u.listeners[e],function(t){t.count++});var f=(c[n]||(c[n]={value:s,list:[]})).list;S(f,e)||A(f,e),o.pending||(o.pending=t,o.nextTask.append(function(){o.pending&&(o.pending=r,o.diffAsync())}))})},Lt.prototype.diffAsync=function(){var t=this,e=t.asyncEmitter,n=t.asyncChanges;t.asyncChanges={},st(n,function(n,r){var i=[t.get(r),n.value,r];T(n.list,function(t){e.fire(t,i,Yt)})})},Lt.prototype.addComputed=function(e,n){var r=Dt.build(e,this,n);if(r)return this.computed||(this.computed={}),this.computed[e]=r,this.reversedComputedKeys=ot(this.computed,t),r},Lt.prototype.removeComputed=function(e){var n=this.computed;n&&ut(n,e)&&(delete n[e],this.reversedComputedKeys=ot(n,t))},Lt.prototype.watch=function(t,e,n){var i=this,o=i.context,s=i.syncEmitter,u=i.asyncEmitter,c=function(t,e,n){y(e)&&(b(e.immediate)&&(n.immediate=e.immediate),b(e.sync)&&(n.sync=e.sync),b(e.once)&&(n.once=e.once),l(e.watcher)&&(e=e.watcher));var c=n.sync?s:u;if(l(e)){var f={fn:e,ctx:o,count:0};n.once&&(f.max=1),c.on(t,f)}n.immediate&&$(e,o,[i.get(t),r,t])};m(t)?(l(e)||y(e))&&c(t,e,Kt(n)):st(t,function(t,e){c(e,t,{})})},Lt.prototype.unwatch=function(t,e){this.syncEmitter.off(t,e),this.asyncEmitter.off(t,e)},Lt.prototype.toggle=function(t){var e=!this.get(t);return this.set(t,e),e},Lt.prototype.increase=function(t,e,n){var r=jt(this.get(t),0)+(e||1);if(!g(n)||r<=n)return this.set(t,r),r},Lt.prototype.decrease=function(t,e,n){var r=jt(this.get(t),0)-(e||1);if(!g(n)||r>=n)return this.set(t,r),r},Lt.prototype.insert=function(n,r,i){var o=this.get(n),s=(o=d(o)?at(o):[]).length;if(i===t||i===s)o.push(r);else if(i===e||0===i)o.unshift(r);else{if(!(i>0&&i<s))return;o.splice(i,0,r)}return this.set(n,o),t},Lt.prototype.append=function(e,n){return this.insert(e,n,t)},Lt.prototype.prepend=function(t,n){return this.insert(t,n,e)},Lt.prototype.removeAt=function(e,n){var r=this.get(e);if(d(r)&&n>=0&&n<r.length)return(r=at(r)).splice(n,1),this.set(e,r),t},Lt.prototype.remove=function(e,n){var r=this.get(e);if(d(r)&&q(r=at(r),n))return this.set(e,r),t},Lt.prototype.copy=function(t,e){return at(t,e)},Lt.prototype.destroy=function(){this.syncEmitter.off(),this.asyncEmitter.off(),this.nextTask.clear(),ct(this)};var Ut=u;if(Ut&&(Ut.body.classList,!Ut.addEventListener)){var Bt=function(t,e){ft(this,t),this.currentTarget=e,this.target=t.srcElement||e,this.originalEvent=t};Bt.prototype.preventDefault=function(){this.originalEvent.returnValue=e},Bt.prototype.stopPropagation=function(){this.originalEvent.cancelBubble=t}}z(["click","tap"]);var Nt=function(e){var n=this;y(e)||(e=c),n.$options=e,$(e.beforeCreate,n,e);e.el;var r=e.data,i=e.props,o=e.model,s=(e.parent,e.replace,e.computed),u=(e.template,e.transitions,e.components,e.directives,e.partials,e.filters,e.slots),f=e.events,a=e.methods,p=e.watchers,h=e.extensions;h&&ft(n,h),o&&(n.$model=o);var v=i?n.checkPropTypes(i):{};u&&ft(v,u),i&&y(r)&&gt('"data" option expected to be a function.');var d=n.$observer=new Lt(v,n);s&&st(s,function(t,e){d.addComputed(e,t)});var m=l(r)?$(r,n,e):r;y(m)&&st(m,function(t,e){ut(v,e)?gt('"'+e+'" is already defined as a prop. Use prop default value instead.'):v[e]=t}),n.$emitter=new xt(t),a&&st(a,function(t,e){n[e]=t}),$(e.afterCreate,n),f&&n.on(f),p&&d.nextTask.prepend(function(){n.$observer&&n.watch(p)})};return Nt.use=function(t){t.install(Nt)},Nt.nextTick=function(t){Ot.shared().append(t)},Nt.compile=function(t,e){},Nt.directive=function(t,e){},Nt.transition=function(t,e){},Nt.component=function(t,e){},Nt.partial=function(t,e){},Nt.filter=function(t,e){},Nt.checkPropTypes=function(n,r){var i=at(n);return st(r,function(r,s){var u,c=r.type,f=r.value,a=r.required,h=n[s];(l(a)&&(a=a(n)),p(h))?c?(R(c)?I(c)||T(c,function(n){if(v(h,n))return u=t,e}):u=v(h,c),u!==t&&gt('The prop "'+s+'" type is not matched.')):gt('The prop "'+s+'" in propTypes has no type.'):a?gt('The prop "'+s+'" is marked as required, but its value is not found.'):p(f)&&(i[s]=c===o?f:l(f)?f(n):f)}),i},Nt.prototype.addComputed=function(t,e){return this.$observer.addComputed(t,e)},Nt.prototype.removeComputed=function(t){this.$observer.removeComputed(t)},Nt.prototype.get=function(t,e,n){return this.$observer.get(t,e,n)},Nt.prototype.set=function(t,e){var n=this.$observer;n&&n.set(t,e)},Nt.prototype.on=function(t,e){return this.$emitter.on(t,e,{ctx:this}),this},Nt.prototype.once=function(t,e){return this.$emitter.on(t,e,{ctx:this,max:1}),this},Nt.prototype.off=function(t,e){return this.$emitter.off(t,e),this},Nt.prototype.fire=function(e,n,r){var i,o,s=e instanceof k?e:new k(e);return s.target||(s.target=this),y(n)?i=n:n===t&&(r=t),(o=this.$emitter.fire(s,i))&&(r?this.$children&&T(this.$children,function(e){return o=e.fire(s,n,t)}):this.$parent&&(o=this.$parent.fire(s,n))),o},Nt.prototype.watch=function(t,e,n){return this.$observer.watch(t,e,n),this},Nt.prototype.watchOnce=function(e,n,r){var i=Kt(r);return i.once=t,this.$observer.watch(e,n,i),this},Nt.prototype.unwatch=function(t,e){return this.$observer.unwatch(t,e),this},Nt.prototype.directive=function(t,e){},Nt.prototype.transition=function(t,e){},Nt.prototype.component=function(t,e){},Nt.prototype.partial=function(t,e){},Nt.prototype.filter=function(t,e){},Nt.prototype.forceUpdate=function(){},Nt.prototype.render=function(){},Nt.prototype.update=function(t,e){},Nt.prototype.checkPropTypes=function(t){var e=this.$options.propTypes;return e?Nt.checkPropTypes(t,e):t},Nt.prototype.create=function(t,e,n){},Nt.prototype.destroy=function(){var t=this.$options,e=this.$emitter,n=this.$observer;$(t.beforeDestroy,this),e.off(),n.destroy(),ct(this),$(t.afterDestroy,this)},Nt.prototype.nextTick=function(t,e){var n=this.$observer.nextTask;e?n.prepend(t):n.append(t)},Nt.prototype.toggle=function(t){return this.$observer.toggle(t)},Nt.prototype.increase=function(t,e,n){return this.$observer.increase(t,e,n)},Nt.prototype.decrease=function(t,e,n){return this.$observer.decrease(t,e,n)},Nt.prototype.insert=function(t,e,n){return this.$observer.insert(t,e,n)},Nt.prototype.append=function(t,e){return this.$observer.append(t,e)},Nt.prototype.prepend=function(t,e){return this.$observer.prepend(t,e)},Nt.prototype.removeAt=function(t,e){return this.$observer.removeAt(t,e)},Nt.prototype.remove=function(t,e){return this.$observer.remove(t,e)},Nt.prototype.copy=function(t,e){return this.$observer.copy(t,e)},Nt.version="1.0.0-alpha",Nt.is=w,Nt.array=M,Nt.object=lt,Nt.string=V,Nt.logger=bt,Nt.Event=k,Nt.Emitter=xt,Nt});
//# sourceMappingURL=yox.js.map
