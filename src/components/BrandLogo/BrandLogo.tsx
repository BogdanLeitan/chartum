function BrandLogo({ ticker, className = "logo-img" }: { ticker: string; className?: string }) {
  return <img className={className} src={`/assets/logos/${ticker}.svg`} alt={`${ticker} logo`} />
}

export default BrandLogo
