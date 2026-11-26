gx.evt.autoSkip = false;
gx.define('vazio', true, function (CmpContext) {
   this.ServerClass =  "vazio" ;
   this.PackageName =  "GeneXus.Programs" ;
   this.ServerFullClass =  "vazio.aspx" ;
   this.setObjectType("web");
   this.setCmpContext(CmpContext);
   this.ReadonlyForm = true;
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.autoRefresh = true;
   this.fullAjax = true;
   this.supportAjaxEvents =  true ;
   this.ajaxSecurityToken =  true ;
   this.DSO =  "CEETEPS_ALUNO" ;
   this.SetStandaloneVars=function()
   {
   };
   this.e120a2_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e130a2_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3];
   this.GXLastCtrlId =3;
   GXValidFnc[2]={ id: 2, fld:"",grid:0};
   GXValidFnc[3]={ id: 3, fld:"MAINTABLE",grid:0};
   this.Events = {"e120a2_client": ["ENTER", true] ,"e130a2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[],[]];
   this.Initialize( );
});
