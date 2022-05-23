        
        function select(id){
            document.querySelectorAll('.item-content-inner').forEach(function(itemcontainer){
                itemcontainer.style.display = 'none'
            })
            document.querySelectorAll('.feature2-item').forEach(function(item){
                item.style.cssText=`border-bottom: 0.5px solid hsla(229, 8%, 60%,0.5)`
            })

            document.querySelectorAll('.items').forEach(function(items){
                items.style.cssText = 'color:rgb(144, 147, 161);'
            })
            document.querySelector(`#item-content${id}`).style.display = 'block'
            document.querySelector(`#item-content${id}`).style.cssText = `display:flex;justify-content:space-between;`
            document.querySelector(`#divitem-${id}`).style.cssText = `border-bottom: 4px solid hsl(0, 94%, 66%);`
            document.querySelector(`#pitem-${id}`).style.cssText = `color:black`
        }

        function sm_select(id){
            document.querySelectorAll('.item-content-inner').forEach(function(itemcontainer){
                itemcontainer.style.display = 'none'
            })
            document.querySelectorAll('.items').forEach(function(items){
                items.style.cssText =`border:none;color:hsl(233, 6%, 73%)`
            })
            document.querySelector(`#item-content${id}`).style.cssText = `display:flex;justify-content:space-between;flex-direction:column`
            document.querySelector(`#item-content${id}`).style.display = 'block'
            document.querySelector(`#pitem-${id}`).style.cssText = `border-bottom: 4px solid hsl(0, 94%, 66%);color:black`
        }

        function show(id){
            document.querySelectorAll('.answer').forEach(function(answer){
                answer.style.display = 'none'
            })
            document.querySelectorAll('.arrow').forEach(function(arrow){
                arrow.style.cssText = `content:url(./images/icon-arrow.svg)`
            })
            document.querySelector(`#quesp${id}`).style.display = 'block'
            document.querySelector(`#arrow${id}`).style.cssText = `transition-duration:0.5s;transform:rotatex(180deg);content:url(./images/icon-arrowdown.svg)`
        }

        function hide(id){
            document.querySelector(`#arrow${id}`).style.cssText = `transition-duration:0.5s;transform:rotatex(360deg);content:url(./images/icon-arrow.svg)`
            document.querySelector(`#quesp${id}`).style.display = 'none'
        }

        "use strict"
        document.addEventListener('DOMContentLoaded',function(){

            // RESPONSIVE NAVBAR

            const hamburger = document.querySelector('.hamburger')
            const close = document.querySelector('.close')
            
            // OPEN WITH HAMBURGER
            hamburger.addEventListener('click',function(){
                document.querySelector('.hamburger').style.display = 'none';
                document.querySelector('.left-top').style.display = 'none';
                document.querySelector('.right').style.display = 'none';
                document.querySelector('.mobile-nav').style.display = 'block'
            })

            // CLOSE NAVBAR
            close.addEventListener('click',function(){
                document.querySelector('.mobile-nav').style.display = 'none';
                document.querySelector('.hamburger').style.display = 'block';
                document.querySelector('.left-top').style.display = 'block';
                document.querySelector('.right').style.display = 'block';
            })

            // FEATURE SECTION
            document.querySelectorAll('.items').forEach(function(item){
                item.addEventListener('click',function(){
                    if(window.innerWidth <=870){
                        sm_select(this.dataset.id)
                    }
                    else{
                        select(this.dataset.id)
                    }
                })
            })

            // FAQ SECTION
            document.querySelectorAll('.arrow').forEach(function(arrow){
                arrow.onclick = function(){
                    // show(this.dataset.id)
                    if (document.querySelector(`#quesp${this.dataset.id}`).style.display === 'block' ){
                        hide(this.dataset.id)
                    }
                    else{
                        arrow.style.cssText = `transition-duration:0.5s;transform:rotatex(180deg);content:url(./images/icon-arrowdown.svg)`
                        show(this.dataset.id)
                    }
                }
            })

            // SUBMITTING EMAIL ADDRES
            function clear(){
                inputdiv.style.cssText=`padding:0;background:transparent:border-radius:0`
                errorimg.style.display = 'none'
                email.style.cssText=`display:none`
                email.innerHTML = ""
            }

            function clear2(){
                email.innerHTML = ""
                email.style.cssText=`font-size:0px;padding-left:0px;font-weight:0`
            }
            
            const inputdiv = document.querySelector('#inputdiv')
            const errorimg =  document.querySelector('#error')
            const email = document.createElement('i')
            document.querySelector('form').onsubmit = function(){
                const inputval = document.querySelector('#email').value;
                if (!inputval.includes('@')){
                    email.innerHTML = "Whoops, make sure it's an email";
                    email.style.cssText=`color:white;font-size:10px;padding-left:5px`
                    document.querySelector('#email').value = "";
                    inputdiv.append(email)
                    inputdiv.style.cssText =`padding:3px;background: hsl(0, 94%, 66%);border-radius:5px`
                    errorimg.style.display = 'block'
                    setTimeout(clear,2000)
                }
                else{
                    email.innerHTML ="Success";
                    email.style.cssText=`color:green;font-size:15px;padding-left:5px;font-weight:700`;
                    document.querySelector('#email').value = "";
                    inputdiv.append(email);
                    setTimeout(clear2,2000)
                }
                return false
            }
        })