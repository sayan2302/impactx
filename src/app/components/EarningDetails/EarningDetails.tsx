import React, { useEffect, useState } from 'react'
import EarningFormType1 from './EarningForm/EarningFormType1'
import OthersForm from './EarningForm/OthersForm'


const EarningDetails = ({
    earnerList,
    primaryEarner,
    setPrimaryEarner,
    formType1Fields,
    setFormType1Fields,
    othersFormFields,
    setOthersFormFields
}) => {

    const [earners, setEarners] = useState([])

    useEffect(() => {
        const newEarners = []
        Object.entries(earnerList).forEach(([key, value]) => {
            if (value === true && key !== 'myself') {
                newEarners.push(key)
            }
        })
        setEarners(newEarners)
        // console.log(newEarners)
    }, [earnerList])


    return (
        <div>
            {earnerList.myself &&
                <EarningFormType1
                    primaryEarner={primaryEarner}
                    setPrimaryEarner={setPrimaryEarner}
                    formType1Fields={formType1Fields}
                    setFormType1Fields={setFormType1Fields} />
            }

            {earnerList.spouse &&
                <OthersForm
                    primaryEarner={primaryEarner}
                    setPrimaryEarner={setPrimaryEarner}
                    title="spouse"
                    othersFormFields={othersFormFields}
                    setOthersFormFields={setOthersFormFields}
                />
            }
            {earnerList.father &&
                <OthersForm
                    primaryEarner={primaryEarner}
                    setPrimaryEarner={setPrimaryEarner}
                    title="father"
                    othersFormFields={othersFormFields}
                    setOthersFormFields={setOthersFormFields}
                />
            }
            {earnerList.mother &&
                <OthersForm
                    primaryEarner={primaryEarner}
                    setPrimaryEarner={setPrimaryEarner}
                    title="mother"
                    othersFormFields={othersFormFields}
                    setOthersFormFields={setOthersFormFields}
                />
            }
            {earnerList.sibling &&
                <OthersForm
                    primaryEarner={primaryEarner}
                    setPrimaryEarner={setPrimaryEarner}
                    title="sibling"
                    othersFormFields={othersFormFields}
                    setOthersFormFields={setOthersFormFields}
                />
            }




            {/* {earners.map((item, key) => {
                return (
                    <OthersForm key={Date.now() + key}
                        primaryEarner={primaryEarner}
                        setPrimaryEarner={setPrimaryEarner}
                        title={item}
                        othersFormFields={othersFormFields}
                        setOthersFormFields={setOthersFormFields}
                    />
                )
            })
            } */}


        </div>
    )
}

export default EarningDetails
