"use strict";var _baseComponent=_interopRequireDefault(require("../helpers/baseComponent")),_classNames=_interopRequireDefault(require("../helpers/classNames"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(0,_baseComponent.default)({options:{multipleSlots:!1},relations:{"../cell/index":{type:"descendant",observer:function(){this.callDebounceFn(this.updateIsLastElement)}}},properties:{prefixCls:{type:String,value:"wux-cell-group"},title:{type:String,value:""},label:{type:String,value:""}},computed:{classes:["prefixCls",function(e){return{wrap:(0,_classNames.default)(e),hd:"".concat(e,"__hd"),bd:"".concat(e,"__bd"),ft:"".concat(e,"__ft")}}]},methods:{updateIsLastElement:function(){var e=this.getRelationNodes("../cell/index");if(0<e.length){var n=e.length-1;e.forEach(function(e,t){e.updateIsLastElement(t===n)})}},getBoundingClientRect:function(t){var n=this,e=".".concat(this.data.prefixCls);wx.createSelectorQuery().in(this).select(e).boundingClientRect(function(e){e&&t.call(n,e.height)}).exec()}}});