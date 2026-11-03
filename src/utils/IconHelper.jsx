import React from 'react';
import {
  Code2,
  Coffee,
  Terminal,
  Cpu,
  FileCode2,
  Layers,
  Shield,
  Globe,
  Palette,
  Wind,
  Server,
  Boxes,
  Network,
  Database,
  HardDrive,
  FolderGit2,
  GitBranch,
  Github,
  Code,
  Send,
  Workflow,
  Box,
  TableProperties,
  Binary,
} from 'lucide-react';

const iconMap = {
  Code2,
  Coffee,
  Terminal,
  Cpu,
  FileCode2,
  Layers,
  Shield,
  Globe,
  Palette,
  Wind,
  Server,
  Boxes,
  Network,
  Database,
  HardDrive,
  FolderGit2,
  GitBranch,
  Github,
  Code,
  Send,
  Workflow,
  Box,
  TableProperties,
  Binary,
};

/**
 * High-performance tree-shaken Icon component
 */
export const DynamicIcon = ({ name, size = 18, className = "", color, ...props }) => {
  const IconComponent = iconMap[name] || Code;
  return <IconComponent size={size} className={className} color={color} {...props} />;
};
