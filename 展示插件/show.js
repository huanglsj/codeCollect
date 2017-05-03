/**
 * Created by Administrator on 2015/12/21.
 */
var show=function(set){
    var _self = this;
    _self.DefautlSetting = {
        headMenu: "#headMenu li",
        conList: "#con con-list",
        active: ".active",
        callback: function() { }
    };

    //_self.IsNull = function(value) {
    //    if (typeof (value) == "function") { return false; }
    //    if (value == undefined || value == null || value == "" || value.length == 0) {
    //        return true;
    //    }
    //    return false;
    //}
    //_self.Setting = {
    //    headMenu: _self.IsNull(set.headMenu) ? _self.DefautlSetting.headMenu : set.headMenu,
    //    conList: _self.IsNull(set.conList) ? _self.DefautlSetting.conList : set.conList,
    //    active: _self.IsNull(set.active) ? _self.DefautlSetting.active : set.active,
    //};
    _self.Bind = function() {
        $(_self.DefautlSetting.headMenu).onclick = function() {
            $(this).addClass(_self.DefautlSetting.active).siblings.removeClass(_self.DefautlSetting.active);
            var index = $(this).index();
            $(_self.DefautlSetting.conList).eq(index).addClass(_self.DefautlSetting.active).siblings.removeClass(_self.DefautlSetting.active);
        }
    };
    _self.Bind();
}
