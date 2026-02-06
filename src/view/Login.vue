<template>
    <div class="main-layout">
        <div class="card-login">
            <div class="card">
                <h4>Login Form</h4>
                <div class="form">
                    <div class="form_group">
                        <label>Username</label>
                        <input class="form-input" placeholder="username" />
                    </div>
                    <div class="form_group">
                        <label>Password</label>
                        <input class="form-input" placeholder="password" />
                    </div>
                    
                    <div class="btn">
                        <button class="btn-submit">Login</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.main-layout{
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: white;
    justify-content: center;
}

.card-login{
    width: 30%;
    height: 60%;
    background-color:rgba(240, 58, 176, 0.953);
    border-radius: 9px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: rgb(253, 252, 252);
    padding: 20px;
    
}

h4{
    font-size: 30px;
    margin-bottom: 50px;
    margin-top: 20px;
    font-family: 'Times New Roman', Times, serif;
}

.card{
    width: 70%;
    height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
}

.form{
    display: flex;
    flex-direction: column;
    gap: 28px;
    margin-top: 30px;
    width: 100%;
    margin: 0 auto;
}

.form-input{
    border-radius: 10px;
    padding: 15px;
    border: 1px gray groove;
}

.form_group{
    display: flex;
    flex-direction: column;
    text-align: start;
    font-family: 'Times New Roman', Times, serif;
    font-size: 20px;
}

.btn{
    width: 100%;
}

.btn-submit{
    padding: 10px 30px;
    border: 1px solid;
    border-radius: 6px;
    margin-top: 20px;
    font-family: 'Times New Roman', Times, serif;
}
.btn-submit:hover{
    background-color: gray;
    color: pink;
}

@media screen and (max-width: 768px){
    .main-layout{
        height: 70vh;
        display: flex;
        align-items: center;
        background-color: white;
        justify-content: center;
    }
    .card-login{
        width: 70%;
        height: 80%;
        background-color:rgba(240, 58, 176, 0.953);
        border-radius: 9px;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: rgb(253, 252, 252);
        padding: 20px;
    }

    h4{
        margin-top: 10px;
        margin-bottom: 10px;
    }
    
    .card{
        width: 90%;
    }
}
</style>
