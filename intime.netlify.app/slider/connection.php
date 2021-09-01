<?php
    $hostname = "localhost";
    $username = "root";
    $password = "";
    $dbname = "";

    $koneksi = mysqli_connect($hostname, $username, $password, $dbname);
 
    if(mysqli_connect_errno()){
        echo 'Gagal melakukan koneksi ke Database : '.mysqli_connect_error();
    }else{
        echo 'Koneksi berhasil ^_^';
    }
?>