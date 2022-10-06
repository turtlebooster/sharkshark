import { VStack, Image, Box } from '@chakra-ui/react';
import React from 'react';

const NonRival = () => {
  return (
    <VStack p={20}>
      <Image src="/assets/character/character_rival_2.svg" />
      <Box fontSize="20px" fontWeight={600}>
        라이벌로 지정된 사용자가 없습니다
      </Box>
      <Box fontSize="14px" fontWeight={300}>
        나와 함께 성장할 라이벌을 지정해보세요!
      </Box>
    </VStack>
  );
};

export default NonRival;
