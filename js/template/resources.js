define([], function(){
	/*定义所有的模板*/
	return {
		temp_navlist : `
			<ul class="nav-sub">
				<% for(var i=0; i<data.length; i++) %>
					<li class="point"><a> <%= data[i] %> </a></li>
				<% } %>
			</ul>`,
		temp_friendlinks : `xxxxxxx`,
		temp_toplist : `xxxxxx`
	}
});