zul.sel.Listheader=zk.$extends(zul.mesh.SortWidget,{getListbox:zul.mesh.HeaderWidget.prototype.getMeshWidget,getMeshBody:zul.mesh.HeaderWidget.prototype.getMeshWidget,checkClientSort_:function(b){var a;return !(!(a=this.getMeshBody())||a.hasGroup())&&this.$supers("checkClientSort_",arguments)},$define:{maxlength:[function(a){return !a||a<0?0:a},function(){if(this.desktop){this.rerender(0);this.updateCells_()}}]},updateCells_:function(){var d=this.getListbox();if(d==null||d.getMold()=="select"){return}var b=this.getChildIndex(),a;for(var c=d.getBodyWidgetIterator();(a=c.next());){if(b<a.nChildren){a.getChildAt(b).rerender(0)}}a=d.listfoot;if(a&&b<a.nChildren){a.getChildAt(b).rerender(0)}},getZclass:function(){return this._zclass==null?"z-listheader":this._zclass},bind_:function(){this.$supers(zul.sel.Listheader,"bind_",arguments);var a=this.$n("cm"),c=this.$n();if(a){var b=this.getListbox();if(b){b._headercm=a}this.domListen_(a,"onClick").domListen_(a,"onMouseOver").domListen_(a,"onMouseOut")}if(c){this.domListen_(c,"onMouseOver","_doSortMouseEvt").domListen_(c,"onMouseOut","_doSortMouseEvt")}},unbind_:function(){var a=this.$n("cm"),c=this.$n();if(a){var b=this.getListbox();if(b){b._headercm=null}this._checked=null;this.domUnlisten_(a,"onClick").domUnlisten_(a,"onMouseOver").domUnlisten_(a,"onMouseOut")}if(c){this.domUnlisten_(c,"onMouseOver","_doSortMouseEvt").domUnlisten_(c,"onMouseOut","_doSortMouseEvt")}this.$supers(zul.sel.Listheader,"unbind_",arguments)},_doSortMouseEvt:function(a){var b=this.getSortAscending();if(b!="none"){jq(this.$n())[a.name=="onMouseOver"?"addClass":"removeClass"](this.getZclass()+"-sort-over")}},_doMouseOver:function(b){var a=this._checked?"-img-over-seld":"-img-over";jq(b.domTarget).addClass(this.getZclass()+a)},_doMouseOut:function(b){var a=this._checked?"-img-over-seld":"-img-over",c=jq(b.domTarget),d=this.getZclass();c.removeClass(d+a);if(this._checked){c.addClass(d+"-img-seld")}},_doClick:function(a){this._checked=!this._checked;var c=this.getListbox(),b=jq(a.domTarget),d=this.getZclass();if(this._checked){b.removeClass(d+"-img-over").addClass(d+"-img-over-seld");c.selectAll(true,a)}else{b.removeClass(d+"-img-over-seld").removeClass(d+"-img-seld").addClass(d+"-img-over");c._select(null,a)}},doClick_:function(a){var b=this.getListbox();if(b&&b._checkmark){var c=a.domTarget;if(c.id&&c.id.endsWith("-cm")){return}}this.$supers("doClick_",arguments)},domContent_:function(){var a=this.$supers("domContent_",arguments),b=this.getListbox();if(b!=null&&this.parent.firstChild==this&&b._checkmark&&b._multiple&&!b._listbox$rod){a='<span id="'+this.uuid+'-cm" class="'+this.getZclass()+'-img"></span>'+(a?"&nbsp;"+a:"")}return a},domLabel_:function(){return zUtl.encodeXML(this.getLabel(),{maxlength:this._maxlength})}});