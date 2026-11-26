function BootstrapClick($)
{
	this.Controle;
	this.ButtonId;
	this.SetButtonId = function(data){
		this.ButtonId = data;
	}

	this.GetButtonId = function(){
		return this.ButtonId;
	}

	this.show = function(){
	}

	this.bootstrapclick = function(id){
		this.ButtonId = id;
		this.Click();
	}
}
