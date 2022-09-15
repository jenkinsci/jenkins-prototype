const text = "[Pipeline Configuration] [-ERROR-] Skipping file '.build/pipelineWarnings.log' because it's empty\n" +
  "            [Pipeline Configuration] Searching for all files in '/home/jenkins/agent/workspace/g_jenkins-ui_develop' that match the pattern '.build/pipelineWarnings.log'\n" +
  "            [Pipeline Configuration] -> found 1 file\n" +
  "            [Pipeline Configuration] Skipping post processing\n" +
  "            [Pipeline Configuration] No filter has been set, publishing all 0 issues\n" +
  "            [Pipeline Configuration] Repository miner is not configured, skipping repository mining\n" +
  "            [Pipeline] publishIssues\n" +
  "            [Static Analysis] Reference build recorder is not configured\n" +
  "            [Static Analysis] Obtaining reference build from same job (develop)\n" +
  "            [Static Analysis] Using reference build 'jenkins/jenkins%2Fjenkins-ui/develop #16' to compute new, fixed, and outstanding issues\n" +
  "            [Static Analysis] Issues delta (vs. reference build): outstanding: 60, new: 1, fixed: 3\n" +
  "            [Static Analysis] Evaluating quality gates\n" +
  "            [Static Analysis] -> PASSED - Total (errors only): 0 - Quality QualityGate: 1\n" +
  "            [Static Analysis] -> PASSED - Total (severity high only): 6 - Quality QualityGate: 10\n" +
  "            [Static Analysis] -> PASSED - Total (severity normal only): 3 - Quality QualityGate: 20\n" +
  "            [Static Analysis] -> All quality gates have been passed\n" +
  "            [Static Analysis] Health report is disabled - skipping\n" +
  "            [Static Analysis] Created analysis result for 61 issues (found 1 new issues, fixed 3 issues)\n" +
  "            [Static Analysis] Attaching ResultAction with ID 'analysis' to build 'jenkins/jenkins%2Fjenkins-ui/develop #17'.\n" +
  "            [Checks API] No suitable checks publisher found.\n" +
  "            [Pipeline] }\n" +
  "            [Pipeline] // script\n" +
  "            [Pipeline] script\n" +
  "            [Pipeline]\n" +
  "            [Pipeline] // script\n" +
  "            [Pipeline] }\n" +
  "            [Pipeline] // stage\n" +
  "            [Pipeline] }\n" +
  "\n" +
  "            [Pipeline] // ansiColor\n" +
  "            [Pipeline] }\n" +
  "            [Pipeline] // withEnv\n" +
  "            [Pipeline] }\n" +
  "            [Pipeline] // node\n" +
  "            [Pipeline] }\n" +
  "            [Pipeline] // podTemplate\n" +
  "            [Pipeline] End of Pipeline\n" +
  "            [GitLab Pipeline Status] Notifying branch build status: SUCCESS jenkins/jenkins%2Fjenkins-ui/develop: This commit looks good\n" +
  "            [GitLab Pipeline Status] Notified\n" +
  "            Finished: SUCCESS"

export default text;
