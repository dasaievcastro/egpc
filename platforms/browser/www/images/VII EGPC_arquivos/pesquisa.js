/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();

    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.addEventListener("online", onOnline, false);

        function onOnline() {
            $('#contactSubmitButton').removeClass('internetValidate').addClass('buttonsend');
        }
        document.addEventListener("offline", onOffline, false);

        function onOffline() {
            $('#contactSubmitButton').removeClass('buttonsend').addClass('internetValidate');
        }
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
                $('#formpesquisa').val(device.uuid)

    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        // var parentElement = document.getElementById(id);
        // var listeningElement = parentElement.querySelector('.listening');
        // var receivedElement = parentElement.querySelector('.received');

        // listeningElement.setAttribute('style', 'display:none;');
        // receivedElement.setAttribute('style', 'display:block;');

        // console.log('Received Event: ' + id);
        $('.ex1').bootstrapSlider()

        $('.ex1').on("change", function (object){
                var notas = $(this).data("reference");
                $("#"+notas).text(object.value.newValue);
            });

        $("#status").fadeOut(); // will first fade out the loading animation
        $("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
        $('#contactForm').submit(function(e){
            var dados = $('#contactForm').serialize();
            $('#enviarForm').prop('disabled', true);
            $.post("http://egpc.com.br/appegpc/pesquisasatisfacao.php",dados,function(dados){
                if(dados=='Enviado com sucesso'){
                    $('#contactForm').hide();
                    $('#formSuccessMessageWrap').show();
                }else{
                    alert(dados)
                }
            })
            e.preventDefault();
        })
                
    }
};

app.initialize();

// jQuery(document).ready(function($){
// $('#contactForm').submit(function(e){
//     var nome = $('#nome').val()
//     var email = $('#e$(mail').val()
//     var pergunta = $('#pergunta').val()
//     $.post('http://egpc.com.br/appegpc/duvida.php',{nome:nome, email:email, pergunta:pergunta},function(data){
//         alert(data)
//     })
    
//     e.preventDefault()
// })
// })
