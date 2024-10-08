import type { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'
import { useAuthGuard } from '../utils/hooks'
import BreadcrumbItem from 'components/atoms/BreadcrumbItem'
import Text from 'components/atoms/Text'
import Box from 'components/layout/Box'
import Flex from 'components/layout/Flex'
import Breadcrumb from 'components/molecules/Breadcrumb'
import Layout from 'components/templates/Layout'
import CartContainer from 'containers/CartContainer'

const CartPage: NextPage = () => {
  // 認証ガード
  useAuthGuard()

  return (
    <Layout>
      <Flex
        paddingTop={2}
        paddingBottom={2}
        paddingLeft={{ base: 2, md: 0 }}
        paddingRight={{ base: 2, md: 0 }}
        justifyContent="center"
      >
        <Box width="1240px">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link href="/">トップ</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>カート</BreadcrumbItem>
          </Breadcrumb>
          <Box>
            <Text display="block" variant="large" as="h1">
              カート
            </Text>
            {/*
              カートコンテナ
              カートの中にある商品を表示、購入、削除
            */}
            <CartContainer />
          </Box>
        </Box>
      </Flex>
    </Layout>
  )
}

export default CartPage
