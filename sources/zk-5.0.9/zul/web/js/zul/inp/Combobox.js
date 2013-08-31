zul.inp.Combobox=zk.$extends(zul.inp.ComboWidget,{_autocomplete:true,$define:{autocomplete:null,repos:function(){if(this.desktop){var c=this.getInputNode(),b;c.value=this.valueEnter_!=null?this.valueEnter_:this._value||"";if(zk.ie&&c.value){b=c.value.length;b=[b,b]}this._typeahead(this._bDel,b);this._bDel=null;var a=this.getPopupNode_();if(a){a.style.width="auto";if(zk.safari){this._shallRedoCss=true}}}this._repos=false}},onResponse:function(){this.$supers("onResponse",arguments);if(this._shallRedoCss){zk(this.getPopupNode_()).redoCSS(-1);this._shallRedoCss=null}},setValue:function(a){this.$supers("setValue",arguments);this._reIndex();this.valueEnter_=null},_reIndex:function(){var b=this.getValue();if(!this._sel||b!=this._sel.getLabel()){if(this._sel){var c=this._sel.$n();if(c){jq(c).removeClass(this._sel.getZclass()+"-seld")}}this._sel=this._lastsel=null;for(var a=this.firstChild;a;a=a.nextSibling){if(b==a.getLabel()){this._sel=a;break}}}},validateStrict:function(b){var a=this._cst;return this._findItem(b,true)?null:(a?a._errmsg:"")||msgzul.VALUE_NOT_MATCHED},_findItem:function(b,a){return this._findItem0(b,a)},_findItem0:function(g,a,e,b){var f=this.firstChild;if(f&&g){g=g.toLowerCase();var d=this._sel;if(!d||d.parent!=this){d=f}for(var c=b?d.nextSibling?d.nextSibling:f:d;;){if((!a||!c.isDisabled())&&c.isVisible()&&(e?c.getLabel().toLowerCase().startsWith(g):g==c.getLabel().toLowerCase())){return c}if(!(c=c.nextSibling)){c=f}if(c==d){break}}}},_hilite:function(a){this._hilite2(this._findItem(this.getInputNode().value,this._isStrict()||(a&&a.strict)),a)},_hilite2:function(f,e){e=e||{};var b=this._sel;this._sel=f;if(b&&b.parent==this){var h=b.$n();if(h){jq(h).removeClass(b.getZclass()+"-seld")}}if(f&&!f.isDisabled()){jq(f.$n()).addClass(f.getZclass()+"-seld")}if(e.sendOnSelect&&this._lastsel!=f){this._lastsel=f;if(f){var d=this.getInputNode(),g=f.getLabel();this.valueEnter_=d.value=g;if(!e.noSelectRange){zk(d).setSelectionRange(0,g.length)}}if(e.sendOnChange){this.$supers("updateChange_",[])}this.fire("onSelect",{items:f?[f]:[],reference:f})}if(zk.ie<8){var a=this.getPopupNode_(),c=a.style.width;if(a.firstChild&&c&&c!="auto"){a.firstChild.style.width=zk(a).revisedWidth(zk.parseInt(a.style.width)-1)+"px"}}},_isStrict:function(){var a=this.getConstraint();return a&&a._flags&&a._flags.STRICT},open:function(a){this.$supers("open",arguments);this._hilite()},dnPressed_:function(a){this._updnSel(a)},upPressed_:function(a){this._updnSel(a,true)},_updnSel:function(j,g){var d=this.getInputNode(),b=d.value,a,i;if(b){b=b.toLowerCase();var e=this._sel,h=this._next(null,!g);if(!e||e.parent!=this){e=this._next(null,g)}if(!e){j.stop();return}for(var k=e;;){if(!k.isDisabled()&&k.isVisible()){var f=k.getLabel().toLowerCase();if(b==f){a=k;break}else{if(!i&&f.startsWith(b)){i=k;break}}}if((k=this._next(k,g))==e){break}}if(!a){a=i}if(a){var c=zk(d).getSelectionRange();if(c[0]==0&&c[1]==b.length){a=this._next(a,g)}}else{a=this._next(null,g)}}else{a=this._next(null,true)}if(a){zk(a).scrollIntoView(this.$n("pp"))}this._select(a,{sendOnSelect:true});j.stop()},_next:(function(){function a(e,d,c){var b=d?"previousSibling":"nextSibling";for(var f=c?e:e[b];f;f=f[b]){if(!f.isDisabled()){return f}}return null}return function(c,b){if(c){c=a(c,b)}return c?c:a(b?this.firstChild:this.lastChild,!b,true)}})(),_select:function(c,b){var a=this.getInputNode(),d=a.value=c?c.getLabel():"";this.valueSel_=d;this._hilite2(c,b);if(d){zk(a).setSelectionRange(0,d.length)}},otherPressed_:function(b){var f=this,e=b.keyCode,a;this._bDel=a=e==8||e==46;if(this._readonly){switch(e){case 35:case 36:this._hilite2();this.getInputNode().value="";case 37:case 39:this._updnSel(b,e==37||e==35);break;case 8:b.stop();break;default:var c=String.fromCharCode(e);var d=this._findItem0(c,true,true,!!this._sel);if(d){this._select(d,{sendOnSelect:true})}}}else{setTimeout(function(){f._typeahead(a)},zk.opera||zk.safari?10:0)}},_typeahead:function(a,e){if(zk.currentFocus!=this){return}var c=this.getInputNode(),g=c.value,e=e||zk(c).getSelectionRange(),f=this.firstChild;this.valueEnter_=g;if(!g||!f||e[0]!=g.length||e[0]!=e[1]){return this._hilite({strict:true})}var d=this._findItem(g,true);if(d||a||!this._autocomplete){return this._hilite2(d)}g=g.toLowerCase();d=this._sel;if(!d||d.parent!=this){d=f}for(var b=d;;){if(!b.isDisabled()&&b.isVisible()&&b.getLabel().toLowerCase().startsWith(g)){c.value=b.getLabel();zk(c).setSelectionRange(g.length,c.value.length);this._hilite2(b);return}if(!(b=b.nextSibling)){b=f}if(b==d){this._hilite2();return}}},updateChange_:function(){var a=this._value!=this.getInputNode().value;if(this.$supers("updateChange_",arguments)&&a){this._hilite({sendOnSelect:true,noSelectRange:true});return true}this.valueEnter_=null},bind_:function(){this.$supers(zul.inp.Combobox,"bind_",arguments);if(this.isListen("onOpen")){this.listen({onChanging:zk.$void},-1000)}},unbind_:function(){this._hilite2();this._sel=this._lastsel=null;if(this.isListen("onOpen")){this.unlisten({onChanging:zk.$void})}this.$supers(zul.inp.Combobox,"unbind_",arguments)},getZclass:function(){var a=this._zclass;return a?a:"z-combobox"+(this.inRoundedMold()?"-rounded":"")},redrawpp_:function(b){var c=this.uuid;b.push('<div id="',c,'-pp" class="',this.getZclass(),'-pp" style="display:none" tabindex="-1"><table id="',c,'-cave"',zUtl.cellps0,">");for(var a=this.firstChild;a;a=a.nextSibling){a.redraw(b)}b.push("</table></div>")}});