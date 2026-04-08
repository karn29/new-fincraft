// Concepts Data - 67 Financial Concepts

export const concepts = [
  // Markets (12)
  {
    id: 'short-selling',
    name: 'Short Selling',
    category: 'Markets',
    definition: 'Betting a stock price will fall. You borrow shares, sell them, then buy back cheaper to return them.',
    story: 'In 2008, Michael Burry shorted the housing market using credit default swaps. While everyone else lost billions, he made $100 million for his investors.',
    seenIn: ['2008-great-collapse'],
    usedBy: 'Michael Burry'
  },
  {
    id: 'bull-market',
    name: 'Bull Market',
    category: 'Markets',
    definition: 'When prices keep rising and everyone feels optimistic. Named after bulls attacking upward with their horns.',
    story: 'The 1990s dot-com bull market turned any tech company into a billionaire-maker — until it wasn\'t. Pets.com went from IPO to zero in 9 months.',
    seenIn: ['1991-india-liberalization', '1992-harshad-mehta'],
    usedBy: 'Rakesh Jhunjhunwala'
  },
  {
    id: 'bear-market',
    name: 'Bear Market',
    category: 'Markets',
    definition: 'When prices drop 20% or more and fear takes over. Named after bears swiping downward with their paws.',
    story: 'Black Tuesday 1929 started a bear market that lasted 3 years. The Dow fell 89%. People who held cash survived. People who stayed invested waited 25 years to recover.',
    seenIn: ['1929-black-tuesday', '2008-great-collapse'],
    usedBy: 'Jesse Livermore'
  },
  {
    id: 'dead-cat-bounce',
    name: 'Dead Cat Bounce',
    category: 'Markets',
    definition: 'A temporary price recovery during a crash that tricks people into thinking the worst is over. It\'s not.',
    story: 'In October 1929, the market bounced 8% on Thursday. Everyone cheered. Then Black Tuesday came and wiped out the gains plus 40% more.',
    seenIn: ['1929-black-tuesday'],
    usedBy: 'Wall Street traders'
  },
  {
    id: 'margin-call',
    name: 'Margin Call',
    category: 'Markets',
    definition: 'When your broker demands more money because your borrowed investments dropped in value. Pay up or they sell everything.',
    story: 'October 24, 1929. Margin calls went out across Wall Street. Investors who bought on 10% margin had to pay 90% more or lose everything. Most couldn\'t.',
    seenIn: ['1929-black-tuesday'],
    usedBy: 'Goldman Sachs brokers'
  },
  {
    id: 'liquidity-crisis',
    name: 'Liquidity Crisis',
    category: 'Markets',
    definition: 'When everyone wants to sell but nobody wants to buy. Prices collapse because there are no buyers at any reasonable price.',
    story: 'September 2008. After Lehman collapsed, nobody knew which bank was next. Banks stopped lending. Commercial paper froze. Even Apple struggled to fund operations for a week.',
    seenIn: ['2008-great-collapse'],
    usedBy: 'Ben Bernanke'
  },
  {
    id: 'circuit-breaker',
    name: 'Circuit Breaker',
    category: 'Markets',
    definition: 'Automatic trading halt when markets drop too fast. Gives everyone time to breathe before panic sells everything.',
    story: 'March 2020. Circuit breakers triggered four times in two weeks as COVID crashed markets. Each pause gave investors time to decide: panic or opportunity?',
    seenIn: [],
    usedBy: 'SEC'
  },
  {
    id: 'market-cap',
    name: 'Market Cap',
    category: 'Markets',
    definition: 'Total value of a company. Share price × total shares. Not what the company is worth, but what the market says it\'s worth today.',
    story: 'In 2000, Cisco had a $500 billion market cap — more than GDP of most countries. Then the bubble burst. It took 20 years to get back.',
    seenIn: ['2000-dot-com'],
    usedBy: 'Warren Buffett'
  },
  {
    id: 'ipo',
    name: 'IPO',
    category: 'Markets',
    definition: 'Initial Public Offering. When a private company first sells shares to the public. Early investors cash out. New investors bet on the future.',
    story: 'Zomato\'s 2021 IPO was oversubscribed 40x. Retail investors who got shares saw 80% returns in 6 months. Those who bought at the peak waited 2 years.',
    seenIn: ['2021-zomato'],
    usedBy: 'Deepinder Goyal'
  },
  {
    id: 'index-fund',
    name: 'Index Fund',
    category: 'Markets',
    definition: 'A basket that holds every stock in an index. Instead of picking winners, you own the whole market. Boring but beats most professionals.',
    story: 'Warren Buffett bet $1 million that index funds would beat hedge funds over 10 years. He won easily. The average hedge fund returned 2.2%. S&P 500 returned 7.1%.',
    seenIn: [],
    usedBy: 'Warren Buffett'
  },
  {
    id: 'etf',
    name: 'ETF',
    category: 'Markets',
    definition: 'Exchange Traded Fund. Like an index fund but trades like a stock. Buy and sell anytime the market is open.',
    story: 'SPY, the first S&P 500 ETF, launched in 1993. Today it manages $400 billion. It became the most traded security in the world.',
    seenIn: [],
    usedBy: 'Nathan Most'
  },
  {
    id: 'derivatives',
    name: 'Derivatives',
    category: 'Markets',
    definition: 'Financial contracts whose value comes from something else — stocks, bonds, commodities, or even other derivatives.',
    story: 'Warren Buffett called derivatives "financial weapons of mass destruction." In 2008, AIG lost $100 billion on credit default swap derivatives.',
    seenIn: ['2008-great-collapse'],
    usedBy: 'Warren Buffett'
  },
  
  // Corporate Finance (10)
  {
    id: 'burn-rate',
    name: 'Burn Rate',
    category: 'Corporate Finance',
    definition: 'How fast you\'re bleeding money before investors notice. Monthly expenses minus revenue. Runway is how long until you die.',
    story: 'WeWork burned $1 billion per year in 2019. When SoftBank stopped writing checks, the IPO collapsed. Adam Neumann lost $15 billion on paper.',
    seenIn: ['zomato-2021-boardroom'],
    usedBy: 'Masayoshi Son'
  },
  {
    id: 'runway',
    name: 'Runway',
    category: 'Corporate Finance',
    definition: 'How many months you can survive at current burn rate. Cash in bank ÷ monthly burn. When this hits zero, game over.',
    story: 'Tesla had 3 months of runway in December 2008. Elon raised $40 million on Christmas Eve. Six months later, NASA awarded SpaceX a $1.6 billion contract.',
    seenIn: [],
    usedBy: 'Elon Musk'
  },
  {
    id: 'ebitda',
    name: 'EBITDA',
    category: 'Corporate Finance',
    definition: 'Earnings Before Interest, Taxes, Depreciation, Amortization. Shows operating profitability without accounting tricks.',
    story: 'Telecom companies love EBITDA because it hides their massive infrastructure costs. Warren Buffett refuses to use it. He calls it "bullshit earnings."',
    seenIn: [],
    usedBy: 'Warren Buffett'
  },
  {
    id: 'revenue-vs-profit',
    name: 'Revenue vs Profit',
    category: 'Corporate Finance',
    definition: 'Revenue is money coming in. Profit is what\'s left after paying everyone. You can have huge revenue and still go bankrupt.',
    story: 'Amazon had negative profits for 15 years while revenue exploded. Jeff Bezos chose growth over profit. Critics called him crazy until Amazon dominated everything.',
    seenIn: ['amazon-2003-boardroom'],
    usedBy: 'Jeff Bezos'
  },
  {
    id: 'equity-dilution',
    name: 'Equity Dilution',
    category: 'Corporate Finance',
    definition: 'When you raise money by selling shares, your ownership percentage shrinks. More funding rounds = less of the company you own.',
    story: 'WhatsApp founders owned 55% when Facebook acquired them for $19 billion. Most startups hit 15-20% founder ownership at exit.',
    seenIn: [],
    usedBy: 'Brian Acton'
  },
  {
    id: 'term-sheet',
    name: 'Term Sheet',
    category: 'Corporate Finance',
    definition: 'The deal proposal from investors. Says how much they\'ll invest, what valuation, and all the special rights they want.',
    story: 'Uber\'s 2013 term sheet gave investors board seats and veto rights. Travis Kalanick later lost control because of those terms.',
    seenIn: [],
    usedBy: 'Bill Gurley'
  },
  {
    id: 'cap-table',
    name: 'Cap Table',
    category: 'Corporate Finance',
    definition: 'Capitalization Table. Shows who owns what percentage of the company. Founders, employees, investors — everyone listed.',
    story: 'Facebook\'s cap table at IPO: Zuckerberg 28%, Accel 10%, Greylock 5%, employees 10%. The rest were public shareholders.',
    seenIn: [],
    usedBy: 'Mark Zuckerberg'
  },
  {
    id: 'valuation',
    name: 'Valuation',
    category: 'Corporate Finance',
    definition: 'What someone says your company is worth. Pre-money is before investment. Post-money is after. Often more art than science.',
    story: 'Theranos was valued at $9 billion in 2014. In 2018, it shut down. Valuation was zero. Elizabeth Holmes went from billionaire to prison.',
    seenIn: [],
    usedBy: 'Elizabeth Holmes'
  },
  {
    id: 'dcf',
    name: 'DCF',
    category: 'Corporate Finance',
    definition: 'Discounted Cash Flow. Values a company based on future cash flows discounted to today. Garbage in, gospel out.',
    story: 'In 2000, DCF models showed Cisco would dominate forever. Analysts assumed 20% growth for a decade. Reality: growth collapsed to 5%. Stock fell 80%.',
    seenIn: [],
    usedBy: 'Aswath Damodaran'
  },
  {
    id: 'irr',
    name: 'IRR',
    category: 'Corporate Finance',
    definition: 'Internal Rate of Return. The annual return an investment generates. VCs target 30%+ IRR to make their fund math work.',
    story: 'Sequoia\'s investment in WhatsApp returned 500x. Their IRR was over 100%. One deal can make an entire fund.',
    seenIn: [],
    usedBy: 'Jim Goetz'
  },
  
  // Behavioural Economics (10)
  {
    id: 'loss-aversion',
    name: 'Loss Aversion',
    category: 'Behavioural Economics',
    definition: 'Losing $100 hurts twice as much as gaining $100 feels good. This makes people hold losing stocks too long and sell winners too early.',
    story: 'During the 2008 crash, people who checked portfolios daily sold at the bottom. Those who didn\'t look recovered fully by 2012.',
    seenIn: ['2008-great-collapse'],
    usedBy: 'Daniel Kahneman'
  },
  {
    id: 'confirmation-bias',
    name: 'Confirmation Bias',
    category: 'Behavioural Economics',
    definition: 'Seeking information that confirms what you already believe. Ignoring everything else. The silent portfolio killer.',
    story: 'Lehman executives ignored warnings about subprime exposure. They only listened to analysts who said housing never declines nationally.',
    seenIn: ['2008-great-collapse'],
    usedBy: 'Dick Fuld'
  },
  {
    id: 'herd-mentality',
    name: 'Herd Mentality',
    category: 'Behavioural Economics',
    definition: 'Doing what everyone else is doing because safety in numbers feels right. Until the cliff appears.',
    story: 'In 1999, every fund bought dot-com stocks because every other fund did. In 2000, every fund sold. Both decisions destroyed wealth.',
    seenIn: ['1992-harshad-mehta'],
    usedBy: 'George Soros'
  },
  {
    id: 'recency-bias',
    name: 'Recency Bias',
    category: 'Behavioural Economics',
    definition: 'Believing recent events will continue forever. The market went up yesterday, so it will go up tomorrow.',
    story: 'In December 1999, investors believed tech stocks would grow 50% annually forever. By March 2000, the NASDAQ peaked. Then it fell 78%.',
    seenIn: [],
    usedBy: 'Robert Shiller'
  },
  {
    id: 'anchoring',
    name: 'Anchoring',
    category: 'Behavioural Economics',
    definition: 'Fixating on a specific number — usually what you paid. The stock is down 40% but you wait to sell until it\'s back to your purchase price.',
    story: 'People who bought Bitcoin at $60,000 refused to sell at $30,000. Many held through $15,000. The anchor cost them everything.',
    seenIn: [],
    usedBy: 'Richard Thaler'
  },
  {
    id: 'sunk-cost-fallacy',
    name: 'Sunk Cost Fallacy',
    category: 'Behavioural Economics',
    definition: 'Continuing a losing investment because you\'ve already put so much in. The money is gone. The question is: what now?',
    story: 'Kodak kept investing in film cameras despite digital taking over. They spent billions protecting a dead business. Filed bankruptcy in 2012.',
    seenIn: [],
    usedBy: 'Daniel Kahneman'
  },
  {
    id: 'overconfidence',
    name: 'Overconfidence',
    category: 'Behavioural Economics',
    definition: 'Believing you know more than you do. 90% of traders think they\'re above average. Math says that\'s impossible.',
    story: 'LTCM had Nobel Prize winners running it. They were so confident in their models they leveraged 25:1. In 1998, Russia defaulted. LTCM lost $4 billion in months.',
    seenIn: [],
    usedBy: 'John Meriwether'
  },
  {
    id: 'analysis-paralysis',
    name: 'Analysis Paralysis',
    category: 'Behavioural Economics',
    definition: 'Overthinking until you can\'t decide. Waiting for perfect information that doesn\'t exist. Opportunity dies while you research.',
    story: 'Yahoo had chances to buy Google for $1 billion and Facebook for $1 billion. Both times, they analyzed endlessly. Both deals died. Yahoo died too.',
    seenIn: [],
    usedBy: 'Marissa Mayer'
  },
  {
    id: 'narrative-fallacy',
    name: 'Narrative Fallacy',
    category: 'Behavioural Economics',
    definition: 'Creating stories to explain random events. "The market fell because of X." Sometimes the market just moves. No story needed.',
    story: 'Every day, CNBC explains why the market moved. Sometimes it\'s "Fed comments." Sometimes it\'s "oil prices." Often it\'s just noise dressed as insight.',
    seenIn: [],
    usedBy: 'Nassim Taleb'
  },
  {
    id: 'optimism-bias',
    name: 'Optimism Bias',
    category: 'Behavioural Economics',
    definition: 'Believing bad things happen to others, not you. Your startup will succeed. Others will fail. You\'re different.',
    story: '90% of startups fail. Every founder thinks they\'re in the 10%. That optimism drives innovation. It also destroys savings.',
    seenIn: [],
    usedBy: 'Paul Graham'
  },
  
  // Indian Economic History (8)
  {
    id: 'liberalization',
    name: 'Liberalization',
    category: 'Indian Economic History',
    definition: '1991. India opened its economy. Reduced tariffs, allowed foreign investment, ended License Raj. Changed everything.',
    story: 'July 24, 1991. Manmohan Singh presented the budget that changed India. "No power on earth can stop an idea whose time has come," he quoted Tagore.',
    seenIn: ['1991-india-liberalization'],
    usedBy: 'Manmohan Singh'
  },
  {
    id: 'current-account-deficit',
    name: 'Current Account Deficit',
    category: 'Indian Economic History',
    definition: 'When a country imports more than it exports. India imports oil, exports software. The gap must be financed somehow.',
    story: 'In 1991, India\'s CAD hit crisis levels. Foreign reserves could pay for 2 weeks of imports. Gold was pledged to IMF. Liberalization became unavoidable.',
    seenIn: ['1991-india-liberalization'],
    usedBy: 'Montek Ahluwalia'
  },
  {
    id: 'foreign-exchange-reserves',
    name: 'Foreign Exchange Reserves',
    category: 'Indian Economic History',
    definition: 'Dollar reserves held by RBI. Used to pay for imports and defend the rupee. When this runs low, crisis begins.',
    story: 'June 1991. India had $1.2 billion in forex reserves. Two weeks of imports. Gold was airlifted to London as collateral. The nation was effectively bankrupt.',
    seenIn: ['1991-india-liberalization'],
    usedBy: 'S. Venkitaramanan'
  },
  {
    id: 'fiscal-deficit',
    name: 'Fiscal Deficit',
    category: 'Indian Economic History',
    definition: 'When government spends more than it earns. Borrowing fills the gap. Too much borrowing = inflation or default.',
    story: 'In 1990, India\'s fiscal deficit hit 8.4% of GDP. Government borrowed heavily. Interest payments consumed 30% of revenue. Reform became urgent.',
    seenIn: ['1991-india-liberalization'],
    usedBy: 'Yashwant Sinha'
  },
  {
    id: 'harshad-mehta-scam',
    name: 'Harshad Mehta Scam',
    category: 'Indian Economic History',
    definition: '1992. ₹5000 crore fraud using fake bank receipts. Pumped stock prices artificially. Biggest financial scandal in Indian history.',
    story: 'Harshad Mehta used "Ready Forward" deals to siphon bank money. Bought ACC shares at ₹200, pumped to ₹9000. The scam exposed weak banking oversight.',
    seenIn: ['1992-harshad-mehta'],
    usedBy: 'Sucheta Dalal'
  },
  {
    id: 'sebi-formation',
    name: 'SEBI Formation',
    category: 'Indian Economic History',
    definition: 'Securities and Exchange Board of India. Created in 1992 to regulate markets. Given teeth after Harshad Mehta exposed regulatory gaps.',
    story: 'Before SEBI, stock markets ran on trust and manipulation. After 1992, SEBI got enforcement powers. Insider trading, price rigging became punishable offenses.',
    seenIn: ['1992-harshad-mehta'],
    usedBy: 'D.R. Mehta'
  },
  {
    id: 'nifty-50-origin',
    name: 'Nifty 50 Origin',
    category: 'Indian Economic History',
    definition: 'India\'s benchmark index. 50 largest companies across sectors. Launched in 1996. The pulse of Indian equity markets.',
    story: 'NSE launched Nifty in 1996 with base value of 1000. It crossed 10,000 in 2017. 21 years to multiply 10x. Patient investors multiplied wealth 20x.',
    seenIn: [],
    usedBy: 'Ravi Narayanan'
  },
  {
    id: 'upi-revolution',
    name: 'UPI Revolution',
    category: 'Indian Economic History',
    definition: 'Unified Payments Interface. Instant mobile payments. Launched 2016. Made India the world leader in digital payments.',
    story: 'In 2023, UPI processed 10 billion transactions monthly. PhonePe and Google Pay dominate. Street vendors accept UPI. China\'s Alipay took note.',
    seenIn: [],
    usedBy: 'Nandan Nilekani'
  },
  
  // Startup Mechanics (10)
  {
    id: 'product-market-fit',
    name: 'Product-Market Fit',
    category: 'Startup Mechanics',
    definition: 'When customers actually want what you built. Before PMF: pushing uphill. After PMF: can\'t build fast enough.',
    story: 'Instagram had 100,000 users in one week after launch. That\'s PMF. Before that, Burbn had zero traction. They pivoted and found gold.',
    seenIn: [],
    usedBy: 'Marc Andreessen'
  },
  {
    id: 'cac',
    name: 'CAC',
    category: 'Startup Mechanics',
    definition: 'Customer Acquisition Cost. How much you spend to get one paying customer. Marketing + Sales ÷ New Customers.',
    story: 'Dropbox CAC was $300 per paid user. Lifetime value was $600. Unit economics worked. They scaled to 500 million users.',
    seenIn: [],
    usedBy: 'Drew Houston'
  },
  {
    id: 'ltv',
    name: 'LTV',
    category: 'Startup Mechanics',
    definition: 'Lifetime Value. Total revenue from one customer over their relationship with you. LTV must exceed CAC or you die.',
    story: 'Netflix LTV is $800 per subscriber. CAC is $50. This 16:1 ratio lets Netflix spend billions on content and still win.',
    seenIn: ['netflix-2011-boardroom'],
    usedBy: 'Reed Hastings'
  },
  {
    id: 'churn',
    name: 'Churn',
    category: 'Startup Mechanics',
    definition: 'Percentage of customers who leave each month. 5% monthly churn means you lose half your customers yearly. Growth becomes impossible.',
    story: 'MoviePass had 90% annual churn. They blamed pricing. Truth: product didn\'t retain. Burned $500 million. Shut down in 2019.',
    seenIn: ['netflix-2011-boardroom'],
    usedBy: 'Mitch Lowe'
  },
  {
    id: 'arr',
    name: 'ARR',
    category: 'Startup Mechanics',
    definition: 'Annual Recurring Revenue. Subscription revenue normalized to a year. The metric SaaS companies live and die by.',
    story: 'Slack grew from $0 to $100M ARR in 18 months. Fastest ever. Salesforce bought them for $27 billion. ARR multiple: 270x.',
    seenIn: [],
    usedBy: 'Stewart Butterfield'
  },
  {
    id: 'b2b-vs-b2c',
    name: 'B2B vs B2C',
    category: 'Startup Mechanics',
    definition: 'Business-to-Business sells to companies. Business-to-Consumer sells to individuals. Different sales cycles, different metrics.',
    story: 'Zoom succeeded in both. B2C: free users went viral. B2B: enterprises paid for security. Dual model created $100 billion valuation.',
    seenIn: [],
    usedBy: 'Eric Yuan'
  },
  {
    id: 'pivot',
    name: 'Pivot',
    category: 'Startup Mechanics',
    definition: 'Changing direction when your original idea isn\'t working. Not failure — adaptation. Most successful companies pivoted.',
    story: 'Twitter began as Odeo, a podcast platform. Apple launched iTunes podcasts. Odeo was dead. Team pivoted to microblogging. Twitter was born.',
    seenIn: [],
    usedBy: 'Jack Dorsey'
  },
  {
    id: 'acqui-hire',
    name: 'Acqui-hire',
    category: 'Startup Mechanics',
    definition: 'Buying a company just for the team. Product gets shut down. Talent joins the acquirer. Common in tech downturns.',
    story: 'Google acqui-hired over 100 startups. Most products died. But Google got brilliant engineers. Android team came from an acqui-hire.',
    seenIn: [],
    usedBy: 'Larry Page'
  },
  {
    id: 'strategic-vs-financial-investor',
    name: 'Strategic vs Financial Investor',
    category: 'Startup Mechanics',
    definition: 'Strategic investors bring industry connections and expertise. Financial investors bring capital and patience. Choose based on what you need.',
    story: 'Flipkart chose Tencent (strategic) over PE firms (financial). Got e-commerce expertise and Asian market insights. Sold to Walmart for $16 billion.',
    seenIn: [],
    usedBy: 'Sachin Bansal'
  },
  {
    id: 'quick-commerce',
    name: 'Quick Commerce',
    category: 'Startup Mechanics',
    definition: '10-30 minute delivery. Dark stores near customers. High burn, high convenience. Unit economics remain unproven.',
    story: 'Blinkit burned ₹400Cr/month delivering groceries in 10 minutes. Zomato acquired them for $570M. Question: can unit economics ever work?',
    seenIn: ['zomato-2021-boardroom'],
    usedBy: 'Albinder Dhindsa'
  },
  
  // Macroeconomics (10)
  {
    id: 'inflation',
    name: 'Inflation',
    category: 'Macroeconomics',
    definition: 'Prices rising across the economy. Your money buys less each year. Central banks target 2% — enough to encourage spending, not enough to hurt.',
    story: 'Zimbabwe printed money to pay debts in 2008. Inflation hit 79.6 billion percent. A loaf of bread cost 100 trillion Zimbabwe dollars.',
    seenIn: [],
    usedBy: 'Paul Volcker'
  },
  {
    id: 'interest-rates',
    name: 'Interest Rates',
    category: 'Macroeconomics',
    definition: 'Cost of borrowing money. Set by central banks. Low rates = cheap loans = growth. High rates = expensive loans = slowdown.',
    story: 'In 2022, Fed raised rates from 0% to 5% in 18 months. Tech valuations collapsed. Startups that raised at 10x revenue now valued at 2x.',
    seenIn: [],
    usedBy: 'Jerome Powell'
  },
  {
    id: 'monetary-policy',
    name: 'Monetary Policy',
    category: 'Macroeconomics',
    definition: 'Central bank actions controlling money supply and interest rates. Quantitative easing, rate hikes, reserve requirements.',
    story: '2008-2015. Fed cut rates to 0% and bought $4 trillion in bonds. Markets soared. Wealth inequality widened. Debate continues.',
    seenIn: ['2008-great-collapse'],
    usedBy: 'Ben Bernanke'
  },
  {
    id: 'fiscal-policy',
    name: 'Fiscal Policy',
    category: 'Macroeconomics',
    definition: 'Government spending and taxation. Stimulus checks, infrastructure bills, tax cuts. Direct economic intervention.',
    story: '2020 CARES Act: $2 trillion stimulus. Americans got $1200 checks. GDP contracted 3.5% in 2020 but rebounded 5.7% in 2021.',
    seenIn: [],
    usedBy: 'Janet Yellen'
  },
  {
    id: 'gdp',
    name: 'GDP',
    category: 'Macroeconomics',
    definition: 'Gross Domestic Product. Total value of goods and services produced. The scorecard for a country\'s economy.',
    story: 'India\'s GDP grew from $270 billion in 1991 to $3.7 trillion in 2023. 13x growth in 32 years. Fastest major economy expansion in history.',
    seenIn: ['1991-india-liberalization'],
    usedBy: 'Arvind Subramanian'
  },
  {
    id: 'recession',
    name: 'Recession',
    category: 'Macroeconomics',
    definition: 'Two consecutive quarters of economic contraction. Jobs disappear. Spending drops. Feels like winter for the economy.',
    story: '2008 recession: US lost 8.8 million jobs. Unemployment hit 10%. It took 6 years for employment to recover. A generation scarred.',
    seenIn: ['2008-great-collapse'],
    usedBy: 'Christina Romer'
  },
  {
    id: 'stagflation',
    name: 'Stagflation',
    category: 'Macroeconomics',
    definition: 'Worst of both worlds: stagnant growth + high inflation. 1970s America. Unemployment high, prices rising. Central banks trapped.',
    story: '1973-1982. Oil shock caused stagflation. Inflation hit 13%. Unemployment hit 9%. Fed Chair Volcker raised rates to 20%. Broke inflation, caused recession.',
    seenIn: [],
    usedBy: 'Paul Volcker'
  },
  {
    id: 'currency-devaluation',
    name: 'Currency Devaluation',
    category: 'Macroeconomics',
    definition: 'When a country\'s currency loses value against others. Imports become expensive. Exports become competitive. Painful adjustment.',
    story: 'June 1991. Rupee devalued 18% in two days. Imports became costly overnight. But IT exports boomed. Wipro, Infosys became global players.',
    seenIn: ['1991-india-liberalization'],
    usedBy: 'N.R. Narayana Murthy'
  },
  {
    id: 'trade-deficit',
    name: 'Trade Deficit',
    category: 'Macroeconomics',
    definition: 'When a country imports more than it exports. Must be financed by foreign investment or borrowing. Sustainable only if investment is productive.',
    story: 'US trade deficit with China hit $400 billion in 2018. Trump imposed tariffs. Trade war began. Supply chains shifted to Vietnam and India.',
    seenIn: [],
    usedBy: 'Robert Lighthizer'
  },
  {
    id: 'sovereign-debt',
    name: 'Sovereign Debt',
    category: 'Macroeconomics',
    definition: 'Money owed by a government. Borrowed through bonds. Can be restructured but not discharged. Default destroys credibility for decades.',
    story: 'Greece defaulted on €320 billion debt in 2015. Banks closed. ATMs rationed cash. Economy shrank 25%. Took 8 years to recover access to bond markets.',
    seenIn: [],
    usedBy: 'Yanis Varoufakis'
  }
];
