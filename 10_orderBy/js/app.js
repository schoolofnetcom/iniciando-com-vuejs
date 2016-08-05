 var app = new Vue({
     el:'#app',
     data:{
        books:[],
        MySearch:'',
        orderCol:'id',
        orderInverse:1
     },
     methods:{
         filterOrderBy:function(e,col){
             this.orderCol =  col;
             this.orderInverse = this.orderInverse * -1;
             console.log(this.orderInverse);

         }
     },
     ready:function(){
         var self = this;
         self.$http.get('dataServer.json').then(function(response){
             //console.log(response);
             self.books = response.data;
         });
     }
 });