package com.algorithm.server.common;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.Column;
import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;

import java.time.LocalDateTime;
@MappedSuperclass
@Getter
@Setter
@EntityListeners(AuditingEntityListener.class)
public abstract class BaseEntity {
    @CreatedDate //해당 Entity 가 등록될 경우 자동으로 생성
    @Column(updatable = false) // 해당 컬럼에 대해서 업데이트를 하지 않는다.
    private LocalDateTime createdDate;

    @LastModifiedDate //해당 Entity 가 수정될 경우 자동으로 생성
    private LocalDateTime modifiedDate;
}
