(function(){
	if(confirm("FacePunch this PR?")){
		$("textarea.js-comment-field").val(":facepunch: :+1:");
		$("div.form-actions button.primary").click();
	}
})();