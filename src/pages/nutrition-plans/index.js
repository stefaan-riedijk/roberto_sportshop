import React from 'react'
import Navbar from '../../components/Navbar2'
import NewCard from '../../components/NewCard'
import { createClient } from 'contentful'
import { useRouter } from 'next/router'


const contentful = require('contentful')

const client = createClient({
  space: process.env.DB_SPACE_ID,
  accessToken: process.env.DB_ACCESS_TOKEN,
})

export async function getServerSideProps() {


  const res = await client.getEntries({ content_type: 'nutritionPlan' })

  return {
    props : {
      plans: res.items
    }
  }
}




function NutritionPlans({ plans }) {


   const data = JSON.stringify(plans, null , 4)
   console.log("de plannen zijn: " + data)


    const router = useRouter()
    const currentPath = router.route
    console.log('het huidige gekke padje is: ' + currentPath)

    return (
      <>
        <Navbar />


        <main className='absolute mx-3'>

            <div className='relative w-full grid grid-cols-3 gap-4 content-center align-top py-7'>
                <div className='mx-4 '>
                    Lorem Ipsum Hebban Alla Vologe
                </div>
                <div className='mx-4 '>
                    Lorem Ipsum Hebban Alla Vologe
                </div>
                <div className='mx-4 '>
                    Lorem Ipsum Hebban Alla Vologe
                </div>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 gap-4 items-stretch justify-items-center mx-4 md:mx-10 relative w-full'>
              {plans.map((plan)=>
                  {
                      return <div key={plan.id}>
                        <NewCard
                          cardImageUrl={"https:" + plan.fields.planPhoto.fields.file.url}
                          cardTitle={plan.fields.planTitle}
                          cardDescription={plan.fields.description}
                          cardSubheader={'Duration: ' + plan.fields.targetAudience + ' weeks'}
                          cardUrl={currentPath + '/' + plan.fields.slug} />
                        <p>{console.log(plan.id)}</p>
                      </div>
                    }
              )}
            </div>
          </main>
      </>
    )
}

export default NutritionPlans