import React from 'react'
import { abilities } from '@/constants'
import { SiClaude, SiDocker, SiFastapi, SiGit, SiGo, SiGooglecloud, SiGooglecloudstorage, SiGooglegemini, SiGooglemaps, SiKubernetes, SiLangchain, SiMongodb, SiN8n, SiNextdotjs, SiNodedotjs, SiPostgresql, SiPytorch, SiTailwindcss } from '@icons-pack/react-simple-icons'
import type { IconBadgesProps } from '@/types/type'

const FeatureCards: React.FC = () => {
  return (
    <div className="w-full padding-x-lg">
      <div className="mx-auto grid-3-cols">
        {abilities.map(({ format, title, desc }) => (
          <div key={title} className="card-border rounded-xl p-8 flex flex-col gap-4">
            <div className="w-full flex items-center justify-center gap-4">
              <IconBadges format={format} />
            </div>
            <h3 className="text-white text-2xl font-semibold">{title}</h3>
            <p className="text-white-50 text-lg">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

const IconBadges = ({ format }: IconBadgesProps) => {
  if (format === "ai") {
    return (
      <>
        <SiGooglecloud title='GoogleCloud' color='#4285F4' size={32} />
        <SiLangchain title='LangChain' color='#1C3C3C' size={40} />
        <SiGooglegemini title='Gemini' color='#8E75B2' size={32} />
        <SiClaude title='Claude' color='#D97757' size={32} />
        <SiN8n title='n8n' color='#EA4B71' size={32} />
        <SiPytorch title='pt' color='#EE4C2C' size={32} />
      </>
    )
  } else if (format === "ops") {
    return (
      <>
        <SiDocker title='Docker' color='#2496ED' size={32} />
        <SiKubernetes title='K8s' color='#326CE5' size={32} />
        <SiGit title='Git' color='#F05032' size={32} />
        <SiFastapi title='FastAPI' color='#009688' size={32} />
        <SiGooglecloudstorage title='GoogleCloudStorage' color='#AECBFA' size={32} />
        <SiPostgresql title='PostgreSQL' color='#4169E1' size={32} />
      </>
    )
  } else if (format === "web") {
    return (
      <>
        <SiGo title='go' color='#00ADD8' size={32} />
        <SiNodedotjs title='NodeJS' color='#5FA04E' size={32} />
        <SiMongodb title='MongoDB' color='#47A248' size={32} />
        <SiNextdotjs title='NextJS' color='#ffffff' size={32} />
        <SiTailwindcss title='tailwindcss' color='#06B6D4' size={32} />
        <SiGooglemaps title='GoogleMaps' color='#1565C0' size={28} />
      </>
    )
  }
}

export default FeatureCards