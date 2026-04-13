package com.tecabel.tecabel_interview.dtos.core;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class BaseResponseDto<T> {

  private boolean status;
  private String msg;
  private T data;

}
