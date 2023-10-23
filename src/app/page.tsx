/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React from 'react'
import { omdbApiCall, Carousel, clone, HomeList } from '@/components'

let dummyJagsaalt:any[] = []
const hoosonStateJagsaalt:any[] = []
export default function Home() {
  const bgArray = [
    { bg: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f6fc58e6-2e7b-46f0-b76f-4e5c2771dc84/dg7c8je-76285d0b-bd1e-4122-ac64-3da0d08ad664.png/v1/fill/w_1192,h_670,q_70,strp/veneris_by_peaxyl_dg7c8je-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcL2Y2ZmM1OGU2LTJlN2ItNDZmMC1iNzZmLTRlNWMyNzcxZGM4NFwvZGc3YzhqZS03NjI4NWQwYi1iZDFlLTQxMjItYWM2NC0zZGEwZDA4YWQ2NjQucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.x0UZaLoqhmPxk3ZSaPNSSPdLEyOI2NY3HOJIB3O0Dy4' },
    { bg: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2e952f29-1f0b-42a0-866d-e0f316c43e05/dg7cbc2-ccc3b2bf-b6ae-4cda-9e52-7081d85f5310.jpg/v1/fill/w_1095,h_730,q_70,strp/elysian_elegance_by_ishiyamagoose_dg7cbc2-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA2NyIsInBhdGgiOiJcL2ZcLzJlOTUyZjI5LTFmMGItNDJhMC04NjZkLWUwZjMxNmM0M2UwNVwvZGc3Y2JjMi1jY2MzYjJiZi1iNmFlLTRjZGEtOWU1Mi03MDgxZDg1ZjUzMTAuanBnIiwid2lkdGgiOiI8PTE2MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.BRyKL8qVmso2lYN3-nTC38Vgj0NBW4AVwxujw-ZaGVs' },
    { bg: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2e952f29-1f0b-42a0-866d-e0f316c43e05/dg78wdn-a0d8a0a2-bbdf-4015-9fa8-8591a5f9805c.jpg/v1/fill/w_1095,h_730,q_70,strp/royal_grace_by_ishiyamagoose_dg78wdn-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA2NyIsInBhdGgiOiJcL2ZcLzJlOTUyZjI5LTFmMGItNDJhMC04NjZkLWUwZjMxNmM0M2UwNVwvZGc3OHdkbi1hMGQ4YTBhMi1iYmRmLTQwMTUtOWZhOC04NTkxYTVmOTgwNWMuanBnIiwid2lkdGgiOiI8PTE2MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.BIsV3bk9xpmkwCcwL_rUTHLUwSrPYFLCZPWM-5QPfF8' },
    { bg: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f6fc58e6-2e7b-46f0-b76f-4e5c2771dc84/dg7htm1-f1f6b958-32aa-4b23-9afa-9781d1df686d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Y2ZmM1OGU2LTJlN2ItNDZmMC1iNzZmLTRlNWMyNzcxZGM4NFwvZGc3aHRtMS1mMWY2Yjk1OC0zMmFhLTRiMjMtOWFmYS05NzgxZDFkZjY4NmQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.PuB1VxZuiqs0JdmmQ99sugjt5HKISGpEXq-bOQ9vepY' },
  ]
  const [state, setState] = React.useState(clone(hoosonStateJagsaalt))
  const qwerty = ['tt13876842', 'tt15529074', 'tt1799631', 'tt0388629']
  const mount = React.useRef(false)

  React.useEffect(() => {
      const controller = new AbortController
      if(!mount.current) {
          dummyJagsaalt = []
          mount.current = true
          test(0)
      }

      return () => {
          controller.abort()
      }
  }, [])

  function test(index:number) {
      if(index < qwerty.length) {
          omdbApiCall(qwerty[index]).then(result => {
              const cloneResult = JSON.parse(JSON.stringify(result))
              cloneResult["bg"] = bgArray[index].bg
              dummyJagsaalt.push(cloneResult)
          }).finally(() => {
              test(index + 1)
          })
      } else {
          setState(dummyJagsaalt)
      }
  }

  return (
    <>
      <Carousel jagsaalt={state}/>
      <HomeList title={`In Theater`}/>
      <HomeList title={`Upcoming`}/>
      <HomeList title={`Available Online`}/>
      <div className='h-[200px] w-full'></div>
    </>
  )
}

