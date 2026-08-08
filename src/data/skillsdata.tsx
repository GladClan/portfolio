import { 
  SiTypescript, SiPython, SiYaml, SiHtml5, 
  SiReact, SiNextdotjs, SiDotnet, SiNodedotjs,
  SiVitest, SiScrumalliance, SiPostgresql, SiUnity,
  SiGithub, SiVite, 
  SiModelcontextprotocol,
  SiClaude
} from 'react-icons/si';
import { FaJava, FaCss3Alt } from 'react-icons/fa6';
import { TbBrandCSharp } from 'react-icons/tb';
import { 
  LuPlugZap, LuBraces, LuNetwork, LuFileText, LuLayoutTemplate,
  LuLayers, LuFingerprint, LuWorkflow, LuCable, 
  LuMonitorSmartphone,
  LuGraduationCap,
  LuPresentation,
  LuKanban,
  LuDatabaseBackup
} from 'react-icons/lu';
import { GoGitPullRequest } from 'react-icons/go';
import { SkillData } from '../types/skillsdata';
import { PiMicrosoftExcelLogo } from 'react-icons/pi';
import { LucideUsers2 } from 'lucide-react';
import { SVGProps } from 'react';

export function SiCsharp(props: SVGProps<SVGSVGElement>) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      width="1em" height="1em"
      viewBox="0 0 24 24" {...props}
    >
      <path
        fill="currentColor"
        d={"M1.194 7.543" +
          "v8.913" +
          "c0 1.103.588 2.122 1.544 2.674l7.718 4.456" +
          "a3.09 3.09 0 0 0 3.088 0l7.718-4.456" +
          "a3.09 3.09 0 0 0 1.544-2.674" +
          "V7.543" +
          "a3.08 3.08 0 0 0-1.544-2.673" +
          "L13.544.414" +
          "a3.09 3.09 0 0 0-3.088 0" +
          "L2.738 4.87" +
          "a3.09 3.09 0 0 0-1.544 2.673" +
          "m5.403 2.914" +
          "v3.087" +
          "a.77.77 0 0 0 .772.772" +
          "a.773.773 0 0 0 .772-.772" +
          "a.773.773 0 0 1 1.317-.546" +
          "a.78.78 0 0 1 .226.546" +
          "a2.314 2.314 0 1 1-4.631 0" +
          "v-3.087" +
          "c0-.615.244-1.203.679-1.637" +
          "a2.31 2.31 0 0 1 3.274 0" +
          "c.434.434.678 1.023.678 1.637" +
          "a.77.77 0 0 1-.226.545" +
          "a.767.767 0 0 1-1.091 0" +
          "a.77.77 0 0 1-.226-.545" +
          "a.77.77 0 0 0-.772-.772" +
          "a.77.77 0 0 0-.772.772" +
          "m12.35 3.087" +
          "a.77.77 0 0 1-.772.772" +
          "h-.772v.772" +
          "a.773.773 0 0 1-1.544 0" +
          "v-.772" +
          "h-1.544" +
          "v.772" +
          "a.773.773 0 0 1-1.317.546" +
          "a.78.78 0 0 1-.226-.546" +
          "v-.772" +
          "H12" +
          "a.771.771 0 1 1 0-1.544" +
          "h.772" +
          "v-1.543" +
          "H12" +
          "a.77.77 0 1 1 0-1.544" +
          "h.772" +
          "v-.772" +
          "a.773.773 0 0 1 1.317-.546" +
          "a.78.78 0 0 1 .226.546" +
          "v.772" +
          "h1.544" +
          "v-.772" +
          "a.773.773 0 0 1 1.544 0" +
          "v.772" +
          "h.772" +
          "a.772.772 0 0 1 0 1.544" +
          "h-.772" +
          "v1.543" +
          "h.772" +
          "a.776.776 0 0 1 .772.772" +
          "m-3.088-2.315" +
          "h-1.544" +
          "v1.543" +
          "h1.544" +
          "z"
        }
      />
    </svg>
  )
}
export enum Skills_Data_Id_Enum {
  C_Sharp = 'cs',
  TypeScript = 'ts',
  Python = 'py',
  SQL = 'sql',
  Java = 'java',
  YAML = 'yaml',
  HTML = 'html',
  CSS = 'css',
  React = 'react',
  Next_JS = 'next',
  ASP_NET = 'asp',
  Node_JS = 'node',
  Unity = 'unity',
  Git = 'git',
  Vite = 'vite',
  Claude = 'claude',
  API_Integration = 'api',
  REST_API = 'rest',
  Test_Driven_Development = 'tdd',
  Code_Review = 'rev',
  Agile = 'agile',
  System_Design = 'sys-des',
  Technical_Writing = 'tw',
  UI_implementation = 'ui',
  Full_Stack_dev = 'full-stack',
  Authentication = 'aut',
  Software_Development_Lifecycle = 'sdlc',
  Model_Context_Protocol = 'mcp',
  LAN_Networking = 'lan',

  Responsive_Web_Design = 'web',
  Educational_Content = 'edu',
  Microsoft_Excel = 'excel',
  Team_Management = 'team',
  Presentation = 'pres',
  Project_Management = 'proj',
  Data_Modeling = 'data',
}

export const SKILLS_DATA: SkillData[] = [
  // Core Languages & Data
  { id: Skills_Data_Id_Enum.C_Sharp, Icon: SiCsharp, color: '#512BD4' },
  { id: Skills_Data_Id_Enum.CSS, Icon: FaCss3Alt, color: '#1572B6' },
  { id: Skills_Data_Id_Enum.HTML, Icon: SiHtml5, color: '#E34F26' },
  { id: Skills_Data_Id_Enum.Java, Icon: FaJava, color: '#5382A1' },
  { id: Skills_Data_Id_Enum.Python, Icon: SiPython, color: '#3776AB' },
  { id: Skills_Data_Id_Enum.SQL, Icon: SiPostgresql, color: '#4169E1' },
  { id: Skills_Data_Id_Enum.TypeScript, Icon: SiTypescript, color: '#3178C6' },
  { id: Skills_Data_Id_Enum.YAML, Icon: SiYaml, color: '#CB171E' },
  
  // Frameworks, Engines & Tools
  { id: Skills_Data_Id_Enum.ASP_NET, Icon: SiDotnet, color: '#512BD4' },
  { id: Skills_Data_Id_Enum.Claude, Icon: SiClaude, color: '#D97756' },
  { id: Skills_Data_Id_Enum.Git, Icon: SiGithub, color: '#181717' },
  { id: Skills_Data_Id_Enum.Microsoft_Excel, Icon: PiMicrosoftExcelLogo, color: '#107C41' },
  { id: Skills_Data_Id_Enum.Next_JS, Icon: SiNextdotjs, color: '#000000' },
  { id: Skills_Data_Id_Enum.Node_JS, Icon: SiNodedotjs, color: '#5FA442' },
  { id: Skills_Data_Id_Enum.React, Icon: SiReact, color: '#61DAFB' },
  { id: Skills_Data_Id_Enum.Unity, Icon: SiUnity, color: '#000000' },
  { id: Skills_Data_Id_Enum.Vite, Icon: SiVite, color: '#646CFF' },

  // Architecture, Systems & Engineering Concepts
  { id: Skills_Data_Id_Enum.API_Integration, Icon: LuPlugZap, color: '#00A86B' },
  { id: Skills_Data_Id_Enum.Authentication, Icon: LuFingerprint, color: '#EF4444' },
  { id: Skills_Data_Id_Enum.Code_Review, Icon: GoGitPullRequest, color: '#238636' },
  { id: Skills_Data_Id_Enum.Data_Modeling, Icon: LuDatabaseBackup, color: '#A855F7' },
  { id: Skills_Data_Id_Enum.Full_Stack_dev, Icon: LuLayers, color: '#3B82F6' },
  { id: Skills_Data_Id_Enum.LAN_Networking, Icon: LuCable, color: '#6366F1' },
  { id: Skills_Data_Id_Enum.Model_Context_Protocol, Icon: SiModelcontextprotocol, color: '#EAB308' },
  { id: Skills_Data_Id_Enum.Responsive_Web_Design, Icon: LuMonitorSmartphone, color: '#06B6D4'},
  { id: Skills_Data_Id_Enum.REST_API, Icon: LuBraces, color: '#6A5ACD' },
  { id: Skills_Data_Id_Enum.Software_Development_Lifecycle, Icon: LuWorkflow, color: '#10B981' },
  { id: Skills_Data_Id_Enum.System_Design, Icon: LuNetwork, color: '#722ED1' },
  { id: Skills_Data_Id_Enum.Test_Driven_Development, Icon: SiVitest, color: '#76E5B3' },
  { id: Skills_Data_Id_Enum.UI_implementation, Icon: LuLayoutTemplate, color: '#EC4899' },

  // Methodology, Leadership & Professional Soft Skills
  { id: Skills_Data_Id_Enum.Agile, Icon: SiScrumalliance, color: '#1890FF' },
  { id: Skills_Data_Id_Enum.Educational_Content, Icon: LuGraduationCap, color: '#F59E0B' },
  { id: Skills_Data_Id_Enum.Presentation, Icon: LuPresentation, color: '#6366F1' },
  { id: Skills_Data_Id_Enum.Project_Management, Icon: LuKanban, color: '#84CC16' },
  { id: Skills_Data_Id_Enum.Technical_Writing, Icon: LuFileText, color: '#FA8C16' },
  { id: Skills_Data_Id_Enum.Team_Management, Icon: LucideUsers2, color: '#14B8A6' },
];