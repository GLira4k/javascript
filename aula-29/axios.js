import axios from "axios";

axios.get("https://api.github.com.br/users/GLira4k")
    .then((res) => {
        console.log(res.data);
})
.catch(err =>{ console.log(err)})

