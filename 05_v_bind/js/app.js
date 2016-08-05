 var hello = new Vue({
     el:'#hello',
     data:{
         msg:"Hello Vue!",
         peoples:[
             {name:"Maria"},
             {name:"Pedro"},
             {name:"Gustavo"},
             {name:"Ana"},
             {name:"Gabriela"}
         ],
         newElement:'',
         elements: [],
         objectA:{
            'font-size':'30px'
         },
         objectB:{
            color:"red"
         }
     },
     methods:{
         addElement: function(){
             var title = this.newElement.trim();
             if(title){
                 this.elements.push({title:title});
                 this.newElement = "";
             }

         },
         removeElement: function(e,index){
             e.preventDefault();
             this.elements.splice(index,1);
         },
         myClick:function(){
             alert('Click');
         },
         myKeyUp: function(){
             alert('myKeyUp');
         }
     }
 });