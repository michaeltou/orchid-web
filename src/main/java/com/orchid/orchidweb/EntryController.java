package com.orchid.orchidweb;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletResponse;

/**
 * 功能说明:
 *
 * @author douming
 * 创建时间： 2024/6/27 10:54
 */
@Controller

public class EntryController {

    @RequestMapping("/async")

    public String test(HttpServletResponse response){
        response.setHeader("Access-Control-Allow-Origin", "*");
        return "async.html";
    }
}
