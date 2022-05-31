var app = new Vue({
     el:'#root',
       
         data:{
           counter:0,
           ultimoAccesso:'Online',
           newMessage:'',
           sfondoApp:'img/sfondoApp.jpg',
           cercaUtn:'',
           giaInviato:'hai gia inviato questo messaggio',
           risposte:['si','no','forse','dai vediamo','ma certo','ci può stare','bella zio'],
            contacts: [
                {
                  name: "michele",
                  lastAccess:'21:00',
                  avatar: "_1",
                  visible: true,
                  messages: [
                    {
                      date: "10/01/2020 15:30:55",
                      text: "Hai portato a spasso il cane?",
                      status: "sent",
                      menuVisible: false,
                    },
                    {
                      date: "10/01/2020 15:50:00",
                      text: "Ricordati di dargli da mangiare",
                      status: "sent",
                      menuVisible: false,
                    },
                    {
                      date: "10/01/2020 16:15:22",
                      text: "Tutto fatto!",
                      status: "received",
                      menuVisible: false,
                    },
                  ],
                },
                {
                  name: "fabio",
                  lastAccess:'20:00',
                  avatar: "_8",
                  visible: true,
                  messages: [
                    {
                      date: "20/03/2020 16:30:00",
                      text: "Ciao come stai?",
                      status: "sent",
                      menuVisible: false,
                    },
                    {
                      date: "20/03/2020 16:30:55",
                      text: "Bene grazie! Stasera ci vediamo?",
                      status: "received",
                      menuVisible: false,
                    },
                    {
                      date: "20/03/2020 16:35:00",
                      text: "Mi piacerebbe ma devo andare a fare la spesa.",
                      status: "sent",
                      menuVisible: false,
                    },
                  ],
                },
                {
                  name: "samuele",
                  lastAccess:'16:00',
                  avatar: "_3",
                  visible: true,
                  messages: [
                    {
                      date: "28/03/2020 10:10:40",
                      text: "La Marianna va in campagna",
                      status: "received",
                      menuVisible: false,
                    },
                    {
                      date: "28/03/2020 10:20:10",
                      text: "Sicuro di non aver sbagliato chat?",
                      status: "sent",
                      menuVisible: false,
                    },
                    {
                      date: "28/03/2020 16:15:22",
                      text: "Ah scusa!",
                      status: "received",
                      menuVisible: false,
                    },
                  ],
                },
                {
                  name: "luisa",
                  lastAccess:'17:30',
                  avatar: "_9",
                  visible: true,
                  messages: [
                    {
                      date: "10/01/2020 15:30:55",
                      text: "Lo sai che ha aperto una nuova pizzeria?",
                      status: "sent",
                      menuVisible: false,
                    },
                    {
                      date: "10/01/2020 15:50:00",
                      text: "Si, ma preferirei andare al cinema",
                      status: "received",
                      menuVisible: false,
                    },
                  ],
                },
              ],
         },


         
         methods:{

          // funzione per selezionare l'utente prescelto o corrente
          selectUtn:function(index){
                return this.counter = index
          },

             sendMex:function(){
                let New={
                    status:'sent',
                    date:dayjs().format('DD/MM/YYYY HH:MM'),
                    text:this.newMessage,
                }
                this.contacts[this.counter].messages.push(New)
                this.newMessage=''

                setTimeout(this.risposta, 2000)
             },

             risposta:function(){
                  let reply={
                      status:'received',
                      date:dayjs().format('DD/MM/YYYY HH:MM'),
                      text:this.risposte[this.replyRandom(0,this.risposte.length-1)]
                  }
                  this.contacts[this.counter].messages.push(reply)
             },
             replyRandom:function(min, max){
                return Math.floor(Math.random()*(max-min +1)+min)
             },
             
             searchUsr:function(){
              this.contacts.forEach(element => {
                   
                      if(element.name.toLowerCase().includes(this.cercaUtn)){
                        element.visible=true
                      } else {
                        element.visible=false
                      }
               });
             }

         },
})