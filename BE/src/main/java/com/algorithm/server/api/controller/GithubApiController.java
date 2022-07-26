package com.algorithm.server.api.controller;

import com.algorithm.server.api.dto.GithubDto;
import com.algorithm.server.common.BaseResponseBody;
import io.swagger.annotations.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/login/github")
@Api(value = "깃 헙 소셜 로그인 API",  tags = {"Github"})
public class GithubApiController {

    @Value("${GITHUB_CLIENT_PW}")
    String temp;

    @PostMapping
    @ApiOperation(value = "Github code 받는다", notes = "Github code 받는다")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 401, message = "인증 실패"),
            @ApiResponse(code = 404, message = "사용자 없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<?> githubAccesstoken(
            @RequestBody @ApiParam(value="유저 정보", required = true) GithubDto.GithubLoginDto githubLoginDto
            ){


        return ResponseEntity.status(200).body(BaseResponseBody.of(200, "성공"));
    }

}
