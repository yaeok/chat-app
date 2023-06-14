'use client'
import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'
import { useRecoilValue } from 'recoil'

import Loading from '@/app/common/components/loading.component'
import { useToast } from '@/app/common/design'
import { userState } from '@/app/common/states/user'

type Props = {
  children: ReactNode
}

export const AuthGuard = ({ children }: Props) => {
  const user = useRecoilValue(userState)
  const router = useRouter()
  const toast = useToast()

  if (typeof user === 'undefined') {
    return <Loading />
  }

  if (user === null) {
    router.push('/')
    toast({
      title: 'ログインしてください',
      status: 'error',
      isClosable: true,
    })
    return null
  }

  return <>{children}</>
}