'use client'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { useRecoilValue } from 'recoil'

import { Button, Flex, Icon, Text, VStack } from '@/common/design'
import { userState } from '@/common/states/user'
import { loginWithGoogle } from '@/lib/apis/auth'

export default function LoginScreen() {
  const router = useRouter()
  const user = useRecoilValue(userState)
  const onClickGoogle = async () => {
    await loginWithGoogle().then(() => {
      router.push('/home')
    })
  }
  useEffect(() => {
    if (user) {
      router.push('/home')
    }
  }, [])
  return (
    <Flex height='100vh' justifyContent='center' paddingTop='20vh'>
      <VStack spacing='5'>
        <Text fontSize='5xl' fontWeight='bold' textAlign='center'>
          chat-app
        </Text>
        <Button
          variant='outline'
          marginTop='4'
          colorScheme='gray'
          type='submit'
          paddingX='10'
          leftIcon={<Icon as={FcGoogle} />}
          onClick={() => onClickGoogle()}
        >
          Googleでログインする
        </Button>
      </VStack>
    </Flex>
  )
}
