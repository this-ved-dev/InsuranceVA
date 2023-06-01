import React from 'react'

import PageTitle from '../components/Typography/PageTitle'
import SectionTitle from '../components/Typography/SectionTitle'
import CTA from '../components/CTA'
import InfoCard from '../components/Cards/InfoCard'
import { Card, CardBody } from '@windmill/react-ui'
import { CartIcon, ChatIcon, MoneyIcon, PeopleIcon } from '../icons'
import RoundIcon from '../components/RoundIcon'

function KPI() {
  return (
    <>
      <PageTitle>Key Performance Indicators</PageTitle>

      <SectionTitle>Overview</SectionTitle>

      <div className="grid gap-2 mb-8 md:grid-cols-4">

        <Card className="">
          <CardBody>
            <sas-report-object objectName="ve2205"
              authenticationType="guest"
              url="http://pdcesx04069.exnet.sas.com"
              reportUri="/reports/reports/6f8b203f-22dd-48c3-9f78-67ae1923dd70"
            ></sas-report-object>
          </CardBody>
        </Card>

        {/* add colored as attribute to make the card purple */}
        <Card>
          <CardBody>
            <sas-report-object objectName="ve4627"
              authenticationType="guest"
              url="http://pdcesx04069.exnet.sas.com"
              reportUri="/reports/reports/6f8b203f-22dd-48c3-9f78-67ae1923dd70"
            ></sas-report-object>
          </CardBody>
        </Card>
        <Card className="">
          <CardBody>
            <sas-report-object objectName="ve2196"
              authenticationType="guest"
              url="http://pdcesx04069.exnet.sas.com"
              reportUri="/reports/reports/6f8b203f-22dd-48c3-9f78-67ae1923dd70"
            ></sas-report-object>
          </CardBody>
        </Card>
        <Card className="">
          <CardBody>
            <sas-report-object objectName="ve4651"
              authenticationType="guest"
              url="http://pdcesx04069.exnet.sas.com"
              reportUri="/reports/reports/6f8b203f-22dd-48c3-9f78-67ae1923dd70"
            ></sas-report-object>
          </CardBody>
        </Card>
      </div>
      <div className="grid gap-6 mb-8 md:grid-cols-2">
        <Card >
          <CardBody className="" >
            <sas-report-object style={{ height: "350px" }} objectName="ve4637"
              authenticationType="guest"
              url="https://pdcesx04069.exnet.sas.com"
              reportUri="/reports/reports/6f8b203f-22dd-48c3-9f78-67ae1923dd70"
            ></sas-report-object>
          </CardBody>
        </Card>
        <Card className="">
          <CardBody className="">
            <sas-report-object style={{ height: "350px" }} objectName="ve4661"
              authenticationType="guest"
              url="https://pdcesx04069.exnet.sas.com"
              reportUri="/reports/reports/6f8b203f-22dd-48c3-9f78-67ae1923dd70"
            ></sas-report-object>
          </CardBody>
        </Card>
      </div>
    </>
  )
}

export default KPI
