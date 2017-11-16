const permissionMap = {
  "READ_INVENTORY_DASHBOARD": "商品统计查看",
  "READ_CONNECTION_DASHBOARD": "供应商统计查看",
  "MANAGE_DEPARTMENT": "部门管理",
  "MANAGE_USER": "员工管理"
}
const permissionTypeMap = {
    "DASHBOARD": "统计面板权限",
    "USER": "员工权限管理"
}
exports.mapPermissionName = 
function (permissions) {
    for(var n in permissions){
		permissions[n]["name"] = permissionTypeMap[n];
		permissions[n]["permissions"] = [];
        for (var i in permissions[n]["PERMISSIONS"]) {
                permissions[n]["permissions"][i] = {"type" : permissions[n]["PERMISSIONS"][i],
					                                "name" : permissionMap[permissions[n]["PERMISSIONS"][i]]};
		    }
			delete permissions[n]["PERMISSIONS"];
	   }
}