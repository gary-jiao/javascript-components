var deeplyMerge = function(obj1, obj2) {
	for (var p in obj2) {
		try {
			// Property in destination object set; update its value.
			if (obj2[p].constructor == Object) {
				obj1[p] = deeplyMerge(obj1[p], obj2[p]);
			} else if (obj2[p].constructor == Array) {
				for (var i = 0; i < obj2[p].length; i++) {
					obj1[p][i] = deeplyMerge(obj1[p][i], obj2[p][i]);
				}
			} else {
				obj1[p] = obj2[p];
			}
		} catch(e) {
			// Property in destination object not set; create it and set its value.
			obj1[p] = obj2[p];
		}
	}
	return obj1;
}