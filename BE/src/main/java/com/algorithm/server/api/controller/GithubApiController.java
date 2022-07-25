package com.algorithm.server.api.controller;

import io.swagger.annotations.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/login/github")
@Api(value = "깃 헙 소셜 로그인 API",  tags = {"Accident"})
public class GithubApiController {


//    @GetMapping
//    @ApiOperation(value = "토큰을 받아 DB와 비교한다", notes = "토큰을 받아 DB와 비교한다")
//    @ApiResponses({
//            @ApiResponse(code = 200, message = "성공"),
//            @ApiResponse(code = 401, message = "인증 실패"),
//            @ApiResponse(code = 404, message = "사용자 없음"),
//            @ApiResponse(code = 500, message = "서버 오류")
//    })

}
