'use client'
import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default function How() {
    return (
        <section className='how-it-works'>
            <h3>How It Works</h3>
            <Tabs id="controlled-tabs" selectedTabClassName="selected" className='tabs'>
                <TabList className='tab-list'>
                    <Tab className='tab'>1. Code</Tab>
                    <Tab className='tab'>2. Publish</Tab>
                    <Tab className='tab'>3. Diagram</Tab>
                </TabList>

                <TabPanel className="tab-panel">
                    <div className='row'>
                        <div className='col-4'>
                            <h4>Ops Teams Write IaC</h4>
                            <p>DevOps and Platform teams use the infrastructure-as-code tools they know, such as Terraform / OpenTofu, Helm, or CloudFormation, and package them into use-case-specific modules with your policy tooling built in.</p>
                            <p><strong>Your IaC is no longer just config, its a functional software asset. Policy and cost tools are embedded, cutting down maintenance for Ops teams.</strong></p>
                        </div>
                        <div className='col-8'>
                            <img src='https://via.placeholder.com/150' alt='placeholder'></img>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel className="tab-panel row">
                    <div className='col-4'>
                        <h4>Ops Teams Publish Modules</h4>
                        <p>Bundled modules are published in the Massdriver Service Catalog, where developers can easily discover supported cloud services and applications with your organization's compliance, security, and guardrails in place.</p>
                        <p><strong>A central repository for provisioning, policy, and cost controls of your cloud resources.</strong></p>
                    </div>
                    <div className='col-8'>
                        <img src='https://via.placeholder.com/150' alt='placeholder'></img>
                    </div>
                </TabPanel>
                <TabPanel className="tab-panel row">
                    <div className='col-4'>
                        <h4>Devs Diagram to Provision</h4>
                        <p>Developers diagram what they want and your IaC modules are used to provision. Developers don't have to copy Helm Charts or Terraform Modules. They don't have brittle IaC pipelines. Instead, Massdriver uses your modules to provision and builds ephemeral CI/CD pipelines behind the scenes based on the tooling in your modules.</p>
                        <p><strong>Say goodbye to 100's of brittle IaC pipelines.</strong></p>
                    </div>
                    <div className='col-8'>
                        <img src='https://via.placeholder.com/150' alt='placeholder'></img>
                    </div>
                </TabPanel>
            </Tabs>
        </section>
    );
}