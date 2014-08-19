<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="x-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width" />

        <link rel="stylesheet" href="css/bootstrap.css" />
        <link rel="stylesheet" href="css/cousinwebsiteadmin.css" />

        <script src="js/jquery-1.10.2.js"></script>
        <script src="js/bootstrap.js"></script>
        <script src="js/html5"></script>
        <script src="js/cousinwebsiteadmin.js"></script>        

    </head>
    <body>
        <?php include 'admin-top.php'; ?>
        <?php include 'side-menu.php'; ?>
        <div class="container wrapper"> 
            <div class="panel-group" id="accordion">
                <?php
                $i = 1;
                for (; $i <= 8; $i++) {
                    ?>
                    <div class="panel panel-default" style="">
                        <div class="panel-heading" data-target="collapse-btn<?php echo $i; ?>" style="padding-top: 8px!important; padding-bottom: 8px!important;background-color: white; color: #0099ff;">
                            <div class="row">
                                <div class="col-md-8 item-info">
                                    <span class="item-title">Program name/Organization name</span>
                                    <div class="row" style="margin-top:4px;">
                                        <div class="col-md-6"><a class="btn-link" href="#">                                            
                                                <img  src="img/rsz_website.png" alt=""/>www.programpointer.com </a></div>
                                        <div class="col-md-6"><span class="item-details">
                                                <img src="img/rsz_conatct.png" alt=""/>Contact Name</span></div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6"><span class="item-details">
                                                <img src="img/rsz_phone.png" alt=""/>506-858-7777</span></div>
                                        <div class="col-md-6"><span class="item-details">
                                                <img src="img/rsz_email.png" alt=""/>contact.name@domain.com</span></div>
                                    </div>
                                </div>
                                <div class="col-md-4 item-operation" style="margin-top:8px;">
                                    <div class="btn-group btn-group-justified" data-toggle="buttons">
                                        <label class="btn btn-default yes">
                                            <input type="radio" name="options" id="option1" checked>published
                                        </label>
                                        <label class="btn btn-default no">
                                            <input type="radio" name="options" id="option2">unpublished
                                        </label>
                                        <a class="btn btn-orange" data-toggle="collapse" 
                                           data-parent="#accordion" 
                                           href="#collapse<?php echo $i; ?>">details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="collapse<?php echo $i; ?>" class="panel-collapse collapse">
                            <div class="panel-body">
                                <p class="item-desc">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer took a galley of type and scrambled it to make a 
                                    type </p>
                            </div>
                        </div>
                    </div>
                <?php } ?>
            </div>
            <br/>
        </div>
    </body>
</html>
