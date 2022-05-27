function chatReply(msg){
    var today = new Date();
    var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes();
    var dateTime = time+', '+date;
    const Reply = `<div class="d-flex justify-content-start mb-4">
                            <div class="img_cont_msg">
                                <img src="static/assets/gidoen_logo.gif"
                                    class="rounded-circle user_img_msg">
                            </div>
                            <div style='min-width:100px' class="text-center msg_cotainer">
                                `+msg+`
                                <span class="msg_time">`+dateTime+`</span>
                            </div>
                        </div>`
    $('#messages').append(Reply)
}

function userReply(msg) {
    var today = new Date();
    var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes();
    var dateTime = time+', '+date;
    const Reply = `<div class="d-flex justify-content-end mb-4">
                            <div style='min-width:100px' class="text-center msg_cotainer_send">
                                `+msg+`
                                <span class="msg_time_send">`+dateTime+`</span>
                            </div>
                            <div class="img_cont_msg">
                                <img src="static/assets/user_logo.png"
                                    class="rounded-circle user_img_msg">
                            </div>
                        </div>`
    $('#messages').append(Reply)
}

