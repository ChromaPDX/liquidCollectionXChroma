"use strict";(self.webpackChunkliquidCollectionXChroma=self.webpackChunkliquidCollectionXChroma||[]).push([[514],{6514:(t,e,a)=>{a.r(e),a.d(e,{TokenDrop:()=>n});var r=a(2508),i=a(942),s=a(9279);a(3550),a(5025),a(332),a(8455),a(6729),a(4098),a(2555),a(6219),a(1303),a(9242),a(4317),a(3670),a(9120),a(7604),a(8187),a(9362),a(4730),a(6250),a(5725),a(8730),a(237),a(5609),a(7208),a(6841),a(9561),a(553),a(26),a(9392),a(2822),a(571),a(2037),a(2162),a(4063),a(4161),a(266),a(8839),a(1375),a(3320),a(5815),a(9189),a(721),a(4601),a(6878),a(583),a(2355),a(4194),a(1121),a(2484),a(8435);class n extends i.au{constructor(t,e,a){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},c=arguments.length>4?arguments[4]:void 0,o=arguments.length>5?arguments[5]:void 0;super(arguments.length>6&&void 0!==arguments[6]?arguments[6]:new i.cm(t,e,c,s),a,o),(0,r._)(this,"abi",void 0),(0,r._)(this,"metadata",void 0),(0,r._)(this,"roles",void 0),(0,r._)(this,"encoder",void 0),(0,r._)(this,"estimator",void 0),(0,r._)(this,"sales",void 0),(0,r._)(this,"platformFees",void 0),(0,r._)(this,"events",void 0),(0,r._)(this,"claimConditions",void 0),(0,r._)(this,"interceptor",void 0),this.abi=c,this.metadata=new i.ag(this.contractWrapper,i.cJ,this.storage),this.roles=new i.ah(this.contractWrapper,n.contractRoles),this.encoder=new i.af(this.contractWrapper),this.estimator=new i.aQ(this.contractWrapper),this.events=new i.aR(this.contractWrapper),this.sales=new i.aj(this.contractWrapper),this.platformFees=new i.aT(this.contractWrapper),this.interceptor=new i.aS(this.contractWrapper),this.claimConditions=new i.al(this.contractWrapper,this.metadata,this.storage)}async getVoteBalance(){return await this.getVoteBalanceOf(await this.contractWrapper.getSignerAddress())}async getVoteBalanceOf(t){return await this.erc20.getValue(await this.contractWrapper.readContract.getVotes(t))}async getDelegation(){return await this.getDelegationOf(await this.contractWrapper.getSignerAddress())}async getDelegationOf(t){return await this.contractWrapper.readContract.delegates(t)}async isTransferRestricted(){return!await this.contractWrapper.readContract.hasRole((0,i.br)("transfer"),s.d)}async claim(t){let e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return this.claimTo(await this.contractWrapper.getSignerAddress(),t,e)}async claimTo(t,e){let a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return this.erc20.claimTo(t,e,a)}async delegateTo(t){return{receipt:await this.contractWrapper.sendTransaction("delegate",[t])}}async burnTokens(t){return this.erc20.burn(t)}async burnFrom(t,e){return this.erc20.burnFrom(t,e)}async call(t){for(var e=arguments.length,a=new Array(e>1?e-1:0),r=1;r<e;r++)a[r-1]=arguments[r];return this.contractWrapper.call(t,...a)}}(0,r._)(n,"contractRoles",["admin","transfer"])}}]);