import React from "react";
import axios from "axios";

export default axios.create({
    baseURL:'https://api.unsplash.com/',
    headers:{
        Authorization:"Client-ID WDao2K0CJBwUeaO9-DNmDcl3yCP9MPoTu5E7JrzyEuk"
    }
});