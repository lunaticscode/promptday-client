type SuffixCls = Record<string, boolean> | string
const cls = (prefixCls: string, suffixCls: SuffixCls) => {
  if (!suffixCls || (typeof suffixCls === 'string' && !suffixCls.trim().length)) return prefixCls

  // case: suffixCls = string
  if (typeof suffixCls === 'string') {
    return `${prefixCls}-${suffixCls}`
  }

  // case: suffixCls = object
  let resultCls = prefixCls
  for (const cls in suffixCls) {
    resultCls = suffixCls[cls] ? `${resultCls}-${cls}` : resultCls
  }
  return resultCls
}
