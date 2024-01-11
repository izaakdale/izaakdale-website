import React from 'react';

export default function About() {
  return (
    <div className='w-[90%] md:w-[60%] mx-auto mt-12 font-spaceGrotesk text-lg'>
      <p className=''>
        I am a software engineer and developer living in Vancouver, Canada. I
        have worked in a number of industries, leading teams and creating
        backend solutions to cater for hundreds of thousands of users.
      </p>
      <p className='my-4'>
        My favourite tech stack is Go for backend and React with Typescript for
        frontend, leveraging the power of containerization with Kubernetes when
        required.
      </p>
      <p className='my-4'>
        I am deeply interested in distributed systems, scalability and fault
        tolerance. Recently I created a distributed key-value store using Serf
        and Raft similarly to etcd. The code is available{' '}
        <a
          href='https://github.com/izaakdale/dinghy-agent'
          className='underline text-fuchsia-200 hover:text-fuchsia-400'
        >
          here
        </a>{' '}
        on github. I used Serf for cluster membership as well as heartbeat
        messages from the worker nodes to the leader, and Raft to reliably write
        data to all the nodes simultaneously.
      </p>
      <p className='my-4'>
        Another interesting project I have worked on is the simple replica of{' '}
        <a
          href='https://crossplane.io'
          className='underline text-fuchsia-200 hover:text-fuchsia-400'
        >
          crossplane
        </a>{' '}
        I made to gain a deeper understanding of Kubernetes Custom Resource
        Desfinitions. Here I was able to associate the resource to an S3 bucket
        in my account, allowing me to create them using the K8s API. See code{' '}
        <a
          href='https://github.com/izaakdale/simpleplane'
          className='underline text-fuchsia-200 hover:text-fuchsia-400'
        >
          here
        </a>{' '}
      </p>
    </div>
  );
}
