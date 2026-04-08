// Market Simulator Scenarios Data

export const marketScenarios = [
  {
    id: '1929-black-tuesday',
    year: 1929,
    title: 'Black Tuesday',
    subtitle: 'The day the roaring twenties died',
    threatLevel: 'CRITICAL',
    hook: 'Were you long when the floor collapsed?',
    description: 'October 29, 1929. The stock market crashed with such force that it took the entire economy down with it. Banks failed. Businesses closed. Millions lost everything in a single day.',
    intelBrief: {
      intro: [
        'The Roaring Twenties are over. In one morning, $14 billion vanished from the New York Stock Exchange.',
        'Margin calls went out to every investor who borrowed to buy stocks. Most could not pay.',
        'Banks that lent against stock collateral faced insolvency. The domino effect had begun.',
        'This was not just a bad day. This was the start of the Great Depression.',
        'Your portfolio allocation today determines whether you survive the next decade.'
      ],
      keyConcepts: [
        { name: 'Margin Call', definition: 'When your broker demands more money because your borrowed investments dropped in value.' },
        { name: 'Liquidity Crisis', definition: 'When everyone wants to sell but nobody wants to buy — prices collapse.' },
        { name: 'Dead Cat Bounce', definition: 'A temporary price recovery during a crash that tricks people into thinking the worst is over.' }
      ]
    },
    benchmark: {
      investor: 'Jesse Livermore',
      action: 'Went short before the crash, made $100 million (equivalent to $1.5 billion today)',
      lesson: 'He recognized the market was built on borrowed money and speculation, not real value.'
    },
    companies: [
      {
        id: 'USSteel',
        name: 'U.S. Steel',
        sector: 'Industrial',
        price: 261,
        description: 'The largest steel producer in America. Built the skyscrapers of Manhattan and the rails across the continent.',
        financials: {
          revenue: '$518M',
          profitMargin: '8.2%',
          debtToEquity: '0.31',
          marketCap: '$2.8B'
        },
        businessModel: 'Makes steel → Sells to railroads & construction → Profits from industrial expansion',
        momentum: [245, 252, 258, 261, 255, 248, 240, 225, 195, 165, 142, 128, 115, 98, 73, 52, 38, 25],
        analystConsensus: {
          bull: 'Industrial backbone of America. Too big to fail.',
          neutral: 'Waiting for clarity on tariff policies.',
          bear: 'Overvalued at these levels. Construction slowing.'
        },
        risks: ['Dependent on construction boom continuing', 'High fixed costs if demand drops', 'Labor strike risk'],
        eventImpact: { crash: -0.85, panic: -0.70, recession: -0.65 }
      },
      {
        id: 'GE',
        name: 'General Electric',
        sector: 'Technology',
        price: 98,
        description: 'Electrifying America. From light bulbs to radio broadcasting, GE powers the modern age.',
        financials: {
          revenue: '$223M',
          profitMargin: '12.4%',
          debtToEquity: '0.18',
          marketCap: '$1.2B'
        },
        businessModel: 'Invents products → Manufactures at scale → Sells to consumers & utilities',
        momentum: [85, 88, 92, 95, 98, 102, 99, 94, 88, 82, 75, 68, 62, 58, 55, 52, 50, 48],
        analystConsensus: {
          bull: 'Radio is the future. GE owns the patents.',
          neutral: 'Strong company but pricey after this run.',
          bear: 'Consumer spending will crater. Luxury goods first to go.'
        },
        risks: ['Consumer discretionary exposure', 'Radio bubble may burst', 'Patent expirations ahead'],
        eventImpact: { crash: -0.75, panic: -0.55, recession: -0.50 }
      },
      {
        id: 'GM',
        name: 'General Motors',
        sector: 'Automotive',
        price: 112,
        description: 'The world\'s largest automaker. Ford makes one car. GM makes a car for every purse and purpose.',
        financials: {
          revenue: '$1.5B',
          profitMargin: '6.8%',
          debtToEquity: '0.42',
          marketCap: '$1.8B'
        },
        businessModel: 'Designs cars → Assembles in factories → Dealers sell to consumers',
        momentum: [95, 100, 105, 108, 112, 118, 115, 108, 98, 88, 78, 68, 58, 50, 45, 40, 35, 30],
        analystConsensus: {
          bull: 'Every American family will own a car. Growth runway is decades long.',
          neutral: 'Installment buying fueled this rally. Can it continue?',
          bear: 'Market saturation approaching. Replacement cycle only.'
        },
        risks: ['Installment debt defaults rising', 'Ford price war threat', 'Luxury segment vulnerable'],
        eventImpact: { crash: -0.80, panic: -0.65, recession: -0.60 }
      },
      {
        id: 'RCA',
        name: 'Radio Corporation of America',
        sector: 'Technology',
        price: 548,
        description: 'The hot stock of the 1920s. Radio mania drove RCA from $5 to $500 in three years.',
        financials: {
          revenue: '$89M',
          profitMargin: '4.2%',
          debtToEquity: '0.08',
          marketCap: '$890M'
        },
        businessModel: 'Manufactures radios → Sells airtime → Collects advertising revenue',
        momentum: [120, 180, 250, 320, 390, 450, 500, 548, 520, 480, 420, 350, 280, 220, 170, 130, 95, 70],
        analystConsensus: {
          bull: 'Radio is transforming entertainment. We are at year one of a 50-year story.',
          neutral: 'Stock has gone parabolic. Even great companies can be bad investments at wrong prices.',
          bear: 'This is a bubble. No company deserves this valuation. It will end badly.'
        },
        risks: ['Extreme valuation multiple', 'Speculative mania peak', 'No moat vs competitors'],
        eventImpact: { crash: -0.92, panic: -0.85, recession: -0.78 }
      },
      {
        id: 'GoldCash',
        name: 'Gold Reserve Fund',
        sector: 'Finance',
        price: 100,
        description: 'A trust that holds physical gold. When paper promises fail, gold remains.',
        financials: {
          revenue: 'N/A',
          profitMargin: 'N/A',
          debtToEquity: '0.00',
          marketCap: '$45M'
        },
        businessModel: 'Holds gold bars → Issues shares → Charges storage fee',
        momentum: [98, 99, 100, 100, 100, 101, 102, 103, 105, 108, 112, 118, 125, 132, 140, 148, 155, 162],
        analystConsensus: {
          bull: 'When banks fail, gold is the only asset that matters.',
          neutral: 'Doesn\'t produce income but preserves capital in crises.',
          bear: 'Gold pays no dividend. Dead money in normal times.'
        },
        risks: ['Government may confiscate gold', 'No yield opportunity cost', 'Storage fees erode returns'],
        eventImpact: { crash: 0.15, panic: 0.25, recession: 0.35 }
      }
    ],
    events: [
      { title: 'Margin Calls Begin', brief: 'Brokers demand immediate repayment from leveraged investors. Forced selling accelerates.', type: 'crash' },
      { title: 'Bank Runs Start', brief: 'Depositors rush to withdraw cash. Banks begin failing as reserves run dry.', type: 'panic' },
      { title: 'Federal Reserve Hesitates', brief: 'The Fed refuses to inject liquidity, believing weak banks should fail.', type: 'recession' },
      { title: 'Smoot-Hawley Tariff Proposed', brief: 'Congress considers raising import taxes. Trade war fears mount.', type: 'recession' },
      { title: 'Business Investment Collapses', brief: 'Companies cancel expansion plans. Unemployment begins rising sharply.', type: 'recession' },
      { title: 'The Bottom Drops Out', brief: 'Panic reaches maximum intensity. No buyers exist at any price.', type: 'crash' }
    ],
    fearGreedStart: 85, // Extreme Greed -> crashes to Extreme Fear
    sectors: [
      { name: 'Industrials', performance: -45 },
      { name: 'Technology', performance: -62 },
      { name: 'Finance', performance: -78 },
      { name: 'Consumer', performance: -52 },
      { name: 'Materials', performance: -48 },
      { name: 'Energy', performance: -35 },
      { name: 'Utilities', performance: -22 },
      { name: 'Gold/Precious', performance: 28 }
    ]
  },
  {
    id: '1991-india-liberalization',
    year: 1991,
    title: 'India Liberalization',
    subtitle: 'The IMF gave India 15 days',
    threatLevel: 'EXTREME',
    hook: 'Manmohan Singh opened the gates. Would you have bet on this country?',
    description: 'July 1991. India stood at the brink of default. Foreign reserves could cover two weeks of imports. The License Raj was crumbling. Then came the budget that changed everything.',
    intelBrief: {
      intro: [
        'India had $1.2 billion in foreign exchange reserves. Imports cost $800 million per month. Math said default in 15 days.',
        'Gold was airlifted to London as collateral for an emergency IMF loan. National humiliation.',
        'Prime Minister Narasimha Rao and Finance Minister Manmohan Singh chose radical reform over gradual decline.',
        'Import licenses abolished. Industrial licensing ended. Foreign investment welcomed. The gates opened.',
        'Those who understood this moment made generational wealth. Those who feared it watched from the sidelines.'
      ],
      keyConcepts: [
        { name: 'Foreign Exchange Reserves', definition: 'The foreign currency a country holds to pay for imports and defend its currency.' },
        { name: 'Current Account Deficit', definition: 'When a country spends more on foreign trade than it earns — unsustainable long-term.' },
        { name: 'Liberalization', definition: 'Removing government controls on business to allow free market competition.' }
      ]
    },
    benchmark: {
      investor: 'Rakesh Jhunjhunwala',
      action: 'Built massive positions in Indian equities starting 1991, became "Big Bull" of India',
      lesson: 'He saw that economic freedom would unleash Indian entrepreneurship and create wealth for decades.'
    },
    companies: [
      {
        id: 'Reliance1991',
        name: 'Reliance Industries',
        sector: 'Energy',
        price: 42,
        description: 'Dhirubhai Ambani built India\'s largest private company from nothing. Polyester, refining, petrochemicals.',
        financials: {
          revenue: '₹2,847 Cr',
          profitMargin: '11.2%',
          debtToEquity: '1.85',
          marketCap: '₹4,200 Cr'
        },
        businessModel: 'Imports crude oil → Refines into fuel & chemicals → Sells domestically & exports',
        momentum: [35, 37, 39, 40, 42, 45, 48, 52, 58, 65, 72, 80, 88, 95, 102, 110, 118, 125],
        analystConsensus: {
          bull: 'Dhirubhai sees around corners. Licensing regime ending plays to his strengths.',
          neutral: 'High debt concerns but cash flows improving with new refinery.',
          bear: 'Too much leverage. If oil prices move wrong, they\'re finished.'
        },
        risks: ['High debt burden', 'Oil price volatility', 'Political risk if reforms reverse'],
        eventImpact: { reform: 0.85, stagnation: -0.35, crisis: -0.60 }
      },
      {
        id: 'Infosys1991',
        name: 'Infosys Technologies',
        sector: 'Technology',
        price: 18,
        description: 'Seven engineers started this company in Pune. They bet on Indian software talent serving global clients.',
        financials: {
          revenue: '₹89 Cr',
          profitMargin: '18.5%',
          debtToEquity: '0.02',
          marketCap: '₹320 Cr'
        },
        businessModel: 'Trains engineers → Writes code for US/EU companies → Bills in dollars',
        momentum: [15, 16, 17, 18, 19, 21, 23, 26, 30, 35, 42, 50, 60, 72, 85, 100, 118, 138],
        analystConsensus: {
          bull: 'Y2K will drive massive outsourcing demand. India is the place.',
          neutral: 'Tiny company now but impressive margins. Watching closely.',
          bear: 'Services business doesn\'t scale. No product moat.'
        },
        risks: ['Dependent on Western IT spending', 'Visa restrictions risk', 'Talent shortage if boom continues'],
        eventImpact: { reform: 0.95, stagnation: 0.15, crisis: -0.25 }
      },
      {
        id: 'HDFC1991',
        name: 'Housing Development Finance Corp',
        sector: 'Finance',
        price: 125,
        description: 'India\'s first specialized housing finance company. Betting on India\'s middle class wanting homes.',
        financials: {
          revenue: '₹456 Cr',
          profitMargin: '22.8%',
          debtToEquity: '4.2',
          marketCap: '₹1,850 Cr'
        },
        businessModel: 'Raises deposits & bonds → Lends for home purchases → Earns interest spread',
        momentum: [110, 115, 118, 122, 125, 130, 138, 148, 160, 175, 192, 210, 230, 252, 275, 300, 328, 358],
        analystConsensus: {
          bull: 'Urbanization + rising incomes = housing boom for 30 years.',
          neutral: 'Asset-liability management looks solid. Quality franchise.',
          bear: 'Interest rate risk if inflation spikes. NPA cycle ahead.'
        },
        risks: ['Interest rate sensitivity', 'Real estate downturn risk', 'Competition from banks entering housing'],
        eventImpact: { reform: 0.75, stagnation: -0.15, crisis: -0.45 }
      },
      {
        id: 'ITC1991',
        name: 'ITC Limited',
        sector: 'Consumer',
        price: 78,
        description: 'Cigarettes fund diversification into hotels, paper, and packaged foods. Cash machine with monopoly profits.',
        financials: {
          revenue: '₹1,890 Cr',
          profitMargin: '28.5%',
          debtToEquity: '0.15',
          marketCap: '₹3,200 Cr'
        },
        businessModel: 'Sells cigarettes (monopoly) → Generates cash → Invests in new businesses',
        momentum: [72, 74, 76, 77, 78, 80, 82, 85, 88, 92, 96, 100, 105, 110, 115, 120, 126, 132],
        analystConsensus: {
          bull: 'Cigarette pricing power is unmatched. Diversification optionality undervalued.',
          neutral: 'Defensive stock but sin stock discount applies.',
          bear: 'Health awareness will hurt volumes. Regulatory risk always present.'
        },
        risks: ['Anti-tobacco regulation', 'Tax increases on cigarettes', 'Diversification execution risk'],
        eventImpact: { reform: 0.45, stagnation: 0.10, crisis: -0.20 }
      },
      {
        id: 'TataSteel1991',
        name: 'Tata Steel',
        sector: 'Materials',
        price: 245,
        description: 'Asia\'s most integrated steel producer. From iron ore mines to finished steel. Jamshedpur is their city.',
        financials: {
          revenue: '₹3,456 Cr',
          profitMargin: '9.8%',
          debtToEquity: '0.68',
          marketCap: '₹4,800 Cr'
        },
        businessModel: 'Mines iron ore → Makes steel → Sells to auto, construction, infrastructure',
        momentum: [220, 228, 235, 240, 245, 252, 260, 270, 282, 295, 310, 325, 342, 360, 380, 400, 422, 445],
        analystConsensus: {
          bull: 'Infrastructure push will drive steel demand for a decade.',
          neutral: 'Quality management but cyclical business.',
          bear: 'Chinese steel will flood markets. Margin pressure ahead.'
        },
        risks: ['China competition', 'Infrastructure spending cuts', 'Raw material cost volatility'],
        eventImpact: { reform: 0.65, stagnation: -0.25, crisis: -0.50 }
      }
    ],
    events: [
      { title: 'IMF Loan Announced', brief: 'India secures $2.2 billion emergency loan. Austerity measures required.', type: 'reform' },
      { title: 'License Raj Abolished', brief: 'Industrial licensing eliminated for most sectors. Anyone can start a business.', type: 'reform' },
      { title: 'Import Restrictions Lifted', brief: 'Import licenses scrapped. Foreign competition enters India.', type: 'reform' },
      { title: 'FDI Guidelines Released', brief: 'Foreign investors allowed 51% ownership in priority sectors.', type: 'reform' },
      { title: 'Budget Speech Delivered', brief: 'Manmohan Singh presents historic budget. Quote: "No power on earth can stop an idea whose time has come."', type: 'reform' },
      { title: 'Sensex Rebounds', brief: 'Market recognizes the transformation. Foreign funds begin flowing in.', type: 'reform' }
    ],
    fearGreedStart: 15, // Extreme Fear -> moves to Greed
    sectors: [
      { name: 'Technology', performance: 125 },
      { name: 'Finance', performance: 95 },
      { name: 'Energy', performance: 78 },
      { name: 'Consumer', performance: 65 },
      { name: 'Materials', performance: 58 },
      { name: 'Industrials', performance: 52 },
      { name: 'Utilities', performance: 35 },
      { name: 'Telecom', performance: 145 }
    ]
  },
  {
    id: '1992-harshad-mehta',
    year: 1992,
    title: 'The Harshad Mehta Scam',
    subtitle: '₹5000 crore. Fake bank receipts. A bull run built on air.',
    threatLevel: 'SEVERE',
    hook: 'Did you see it coming?',
    description: 'Harshad Mehta manipulated the banking system using fake Bank Receipts. He pumped thousands of crores into selected stocks, creating an artificial bull market. Then Sucheta Dalal exposed it all.',
    intelBrief: {
      intro: [
        'Harshad Mehta discovered a loophole: banks could trade government securities using simple receipts instead of actual transfer.',
        'He used these "Bank Receipts" to borrow money he didn\'t have — ₹5,000 crore worth.',
        'That money flowed into ACC, Sterlite, Videocon, and other stocks. Prices went vertical.',
        'The Sensex quadrupled in 18 months. Everyone thought Mehta was a genius.',
        'April 1992: Sucheta Dalal\'s exposé in The Times of India. The house of cards collapsed.'
      ],
      keyConcepts: [
        { name: 'Securities Scam', definition: 'Fraudulent trading of financial instruments using fake documentation.' },
        { name: 'Ready Forward Deal', definition: 'A short-term loan between banks using government securities as collateral.' },
        { name: 'Market Manipulation', definition: 'Artificially inflating stock prices through coordinated buying and false information.' }
      ]
    },
    benchmark: {
      investor: 'Rakesh Jhunjhunwala',
      action: 'Exited before the crash, later said "I smelled something was wrong"',
      lesson: 'When prices disconnect from fundamentals and one person controls everything, exit immediately.'
    },
    companies: [
      {
        id: 'ACC1992',
        name: 'Associated Cement Companies',
        sector: 'Materials',
        price: 3450,
        description: 'India\'s largest cement producer. Harshad Mehta\'s favorite stock. He pushed it from ₹200 to ₹9000.',
        financials: {
          revenue: '₹1,245 Cr',
          profitMargin: '14.2%',
          debtToEquity: '0.42',
          marketCap: '₹4,850 Cr'
        },
        businessModel: 'Makes cement → Sells to construction companies & retailers → Infrastructure boom beneficiary',
        momentum: [450, 680, 920, 1250, 1680, 2150, 2680, 3200, 3450, 3800, 4200, 4650, 5200, 5800, 6500, 7200, 8100, 9000],
        analystConsensus: {
          bull: 'Infrastructure boom will drive cement demand for years.',
          neutral: 'Stock has run up significantly. Valuation stretched but momentum strong.',
          bear: 'This is manipulation. One operator controls the float. Run for the exits.'
        },
        risks: ['Operator-driven price action', 'Regulatory investigation risk', 'Fundamentals don\'t justify valuation'],
        eventImpact: { scam: -0.88, correction: -0.65, normal: 0.15 }
      },
      {
        id: 'Sterlite1992',
        name: 'Sterlite Industries',
        sector: 'Materials',
        price: 285,
        description: 'Copper and aluminum producer. Another Mehta pump target. Went from ₹25 to ₹350 in months.',
        financials: {
          revenue: '₹456 Cr',
          profitMargin: '11.8%',
          debtToEquity: '0.58',
          marketCap: '₹890 Cr'
        },
        businessModel: 'Smelts copper & aluminum → Sells to cable & electrical manufacturers → Export focused',
        momentum: [35, 48, 65, 88, 115, 148, 185, 225, 265, 285, 310, 340, 375, 415, 460, 510, 565, 625],
        analystConsensus: {
          bull: 'Metal prices cycling up. Export demand strong.',
          neutral: 'Good company but this price action is suspicious.',
          bear: 'Classic pump scheme. When it breaks, it goes to zero.'
        },
        risks: ['Manipulation obvious to anyone looking', 'Commodity price risk', 'Small float enables manipulation'],
        eventImpact: { scam: -0.92, correction: -0.72, normal: 0.10 }
      },
      {
        id: 'Videocon1992',
        name: 'Videocon Industries',
        sector: 'Consumer',
        price: 625,
        description: 'Consumer electronics leader. TVs, washing machines, refrigerators. Made in India brand pride.',
        financials: {
          revenue: '₹1,890 Cr',
          profitMargin: '8.5%',
          debtToEquity: '0.72',
          marketCap: '₹2,100 Cr'
        },
        businessModel: 'Manufactures electronics → Distributes through dealers → Advertises heavily on TV',
        momentum: [120, 155, 195, 245, 305, 375, 450, 525, 590, 625, 665, 710, 760, 815, 875, 940, 1010, 1085],
        analystConsensus: {
          bull: 'Indian consumer boom just starting. Videocon is the national champion.',
          neutral: 'Competition from multinationals entering post-liberalization.',
          bear: 'Margins too thin. Brand loyalty won\'t save them from better products.'
        },
        risks: ['MNC competition post-1991 reforms', 'Input cost inflation', 'Technology obsolescence'],
        eventImpact: { scam: -0.85, correction: -0.58, normal: 0.05 }
      },
      {
        id: 'BombayDye1992',
        name: 'Bombay Dyeing',
        sector: 'Industrials',
        price: 1850,
        description: 'Textile mill owner sitting on prime Mumbai real estate. The land is worth more than the business.',
        financials: {
          revenue: '₹245 Cr',
          profitMargin: '6.2%',
          debtToEquity: '0.95',
          marketCap: '₹1,250 Cr'
        },
        businessModel: 'Operates textile mill → Holds Mumbai land → Real estate value hidden on books',
        momentum: [420, 580, 760, 950, 1150, 1350, 1520, 1680, 1820, 1850, 1900, 1980, 2080, 2200, 2350, 2520, 2700, 2900],
        analystConsensus: {
          bull: 'Mill land redevelopment will unlock massive value.',
          neutral: 'Textile business losing money. Pure real estate play.',
          bear: 'Redemption scams everywhere. This stock is toxic.'
        },
        risks: ['Textile operations bleeding cash', 'Land conversion regulatory delays', 'Scam association'],
        eventImpact: { scam: -0.80, correction: -0.55, normal: 0.20 }
      },
      {
        id: 'BSE1992',
        name: 'BSE Index Fund',
        sector: 'Finance',
        price: 4200,
        description: 'Tracks the Bombay Stock Exchange Sensex. Owns all 30 index companies proportionally.',
        financials: {
          revenue: 'N/A',
          profitMargin: 'N/A',
          debtToEquity: '0.00',
          marketCap: '₹850 Cr'
        },
        businessModel: 'Holds Sensex stocks → Issues units → Tracks index performance',
        momentum: [1800, 2100, 2450, 2800, 3150, 3500, 3850, 4100, 4200, 4350, 4500, 4680, 4850, 5050, 5280, 5520, 5780, 6050],
        analystConsensus: {
          bull: 'India growth story intact. Index diversifies single-stock risk.',
          neutral: 'Market volatile but long-term direction is up.',
          bear: 'Entire market is manipulated. Index will crash when scam breaks.'
        },
        risks: ['Systemic manipulation risk', 'Scam unwinding affects all stocks', 'Foreign investor flight'],
        eventImpact: { scam: -0.75, correction: -0.48, normal: 0.12 }
      }
    ],
    events: [
      { title: 'Mehta\'s Buying Spree', brief: 'Harshad Mehta aggressively accumulates target stocks. Prices go parabolic.', type: 'scam' },
      { title: 'Bank Receipts Questioned', brief: 'Rumors surface about questionable BRs. RBI starts asking questions.', type: 'correction' },
      { title: 'Sucheta Dalal Investigates', brief: 'Journalist begins connecting dots between Mehta, banks, and stock prices.', type: 'correction' },
      { title: 'Times of India Exposé', brief: '"The Mother of All Scams" headline. Details of ₹5000Cr fraud revealed.', type: 'scam' },
      { title: 'Arrest Warrant Issued', brief: 'Harshad Mehta goes underground. Police issue arrest warrant.', type: 'scam' },
      { title: 'Market Crash Begins', brief: 'Panic selling ensues. Stocks manipulated by Mehta collapse 80-90%.', type: 'scam' }
    ],
    fearGreedStart: 92, // Extreme Greed -> crashes
    sectors: [
      { name: 'Materials', performance: -78 },
      { name: 'Consumer', performance: -65 },
      { name: 'Industrials', performance: -58 },
      { name: 'Finance', performance: -72 },
      { name: 'Energy', performance: -45 },
      { name: 'Technology', performance: -38 },
      { name: 'Healthcare', performance: -25 },
      { name: 'Utilities', performance: -18 }
    ]
  },
  {
    id: '2008-great-collapse',
    year: 2008,
    title: 'The Great Collapse',
    subtitle: 'Lehman filed for bankruptcy at 1:45AM',
    threatLevel: 'CRITICAL',
    hook: 'By morning, the world had changed. What did you do?',
    description: 'September 2008. Lehman Brothers filed for Chapter 11. AIG needed an $85 billion bailout. Credit markets froze. The global financial system was hours from total collapse.',
    intelBrief: {
      intro: [
        'Lehman Brothers held $639 billion in assets. Much of it in mortgage-backed securities nobody wanted.',
        'When Lehman filed for bankruptcy, credit default swaps triggered across the entire system.',
        'AIG owed $440 billion on derivatives bets. The U.S. government had to bail them out.',
        'Commercial paper markets froze. Companies couldn\'t make payroll. Global trade stopped.',
        'This wasn\'t a recession. This was the financial system dying. And then being reborn.'
      ],
      keyConcepts: [
        { name: 'Mortgage-Backed Securities', definition: 'Bonds created from bundles of home loans. When homeowners defaulted, these became worthless.' },
        { name: 'Credit Default Swap', definition: 'Insurance against bond defaults. AIG sold too much without reserves to pay claims.' },
        { name: 'Systemic Risk', definition: 'When one institution\'s failure threatens the entire financial system.' }
      ]
    },
    benchmark: {
      investor: 'Warren Buffett',
      action: 'Deployed $43 billion in October 2008 buying Goldman Sachs, GE, and other distressed giants',
      lesson: '"Be fearful when others are greedy, and greedy when others are fearful." He had cash when everyone else was desperate.'
    },
    companies: [
      {
        id: 'Goldman2008',
        name: 'Goldman Sachs',
        sector: 'Finance',
        price: 125,
        description: 'The most prestigious investment bank. Survived the crisis but needed TARP money and Buffett\'s lifeline.',
        financials: {
          revenue: '$45.2B',
          profitMargin: '-12.5%',
          debtToEquity: '38.5',
          marketCap: '$52B'
        },
        businessModel: 'Advises M&A → Trades securities → Manages wealth → Earns fees & spreads',
        momentum: [325, 310, 285, 260, 235, 210, 185, 165, 145, 125, 108, 92, 78, 65, 55, 48, 42, 38],
        analystConsensus: {
          bull: 'Best risk management on Wall Street. Will survive and acquire weaker rivals.',
          neutral: 'Need to see Q4 results. Exposure to Lehman unknown.',
          bear: 'If Lehman failed, Goldman is next. Counterparty risk everywhere.'
        },
        risks: ['Counterparty exposures unknown', 'Short sellers attacking the stock', 'TARP stigma if takes bailout'],
        eventImpact: { crisis: -0.70, bailout: 0.45, recovery: 0.85 }
      },
      {
        id: 'Apple2008',
        name: 'Apple Inc.',
        sector: 'Technology',
        price: 95,
        description: 'Just launched iPhone in 2007. App Store opened in 2008. The smartphone revolution was beginning.',
        financials: {
          revenue: '$32.5B',
          profitMargin: '13.2%',
          debtToEquity: '0.15',
          marketCap: '$85B'
        },
        businessModel: 'Designs hardware → Software ecosystem locks users → Premium pricing power',
        momentum: [185, 175, 165, 155, 145, 135, 125, 115, 105, 95, 88, 82, 78, 75, 73, 72, 75, 80],
        analystConsensus: {
          bull: 'iPhone will change everything. This is a generational opportunity.',
          neutral: 'Great product but recession will hurt consumer spending.',
          bear: 'Luxury device in a depression. Sales will crater.'
        },
        risks: ['Consumer discretionary cutback', 'Recession reduces upgrade cycle', 'Competition from Nokia/BlackBerry'],
        eventImpact: { crisis: -0.45, bailout: 0.15, recovery: 0.95 }
      },
      {
        id: 'Amazon2008',
        name: 'Amazon.com',
        sector: 'Consumer',
        price: 48,
        description: 'Started selling books online. Now sells everything. AWS is a tiny internal project. Kindle just launched.',
        financials: {
          revenue: '$19.2B',
          profitMargin: '2.8%',
          debtToEquity: '0.42',
          marketCap: '$21B'
        },
        businessModel: 'Online marketplace → Fulfillment network → Prime subscriptions → Growing cloud division',
        momentum: [95, 88, 82, 75, 68, 62, 56, 52, 50, 48, 45, 42, 40, 38, 36, 35, 36, 38],
        analystConsensus: {
          bull: 'E-commerce gains share in recession. People shop from home to save.',
          neutral: 'Thin margins but growing fast. AWS could be something.',
          bear: 'Discretionary spending collapse. Retail apocalypse coming.'
        },
        risks: ['Consumer spending collapse', 'Margin pressure from discounting', 'AWS still unproven'],
        eventImpact: { crisis: -0.35, bailout: 0.25, recovery: 0.75 }
      },
      {
        id: 'JPMorgan2008',
        name: 'JPMorgan Chase',
        sector: 'Finance',
        price: 38,
        description: 'Jamie Dimon saw the crisis coming. Reduced exposure to toxic mortgages. Bought Bear Stearns and Washington Mutual.',
        financials: {
          revenue: '$95.4B',
          profitMargin: '8.5%',
          debtToEquity: '12.8',
          marketCap: '$135B'
        },
        businessModel: 'Commercial banking → Investment banking → Asset management → Consumer finance',
        momentum: [42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 30, 28, 26, 24, 22, 20, 18],
        analystConsensus: {
          bull: 'Dimon positioned best among banks. Will emerge stronger.',
          neutral: 'Taking TARP money but probably doesn\'t need it.',
          bear: 'All banks are insolvent if marked to market. Avoid entirely.'
        },
        risks: ['Washington Mutual integration risk', 'Commercial real estate exposure', 'Systemic banking crisis'],
        eventImpact: { crisis: -0.55, bailout: 0.35, recovery: 0.70 }
      },
      {
        id: 'GoldTrust2008',
        name: 'SPDR Gold Trust',
        sector: 'Commodities',
        price: 88,
        description: 'Exchange-traded fund holding physical gold bullion. When faith in banks dies, gold becomes money again.',
        financials: {
          revenue: 'N/A',
          profitMargin: 'N/A',
          debtToEquity: '0.00',
          marketCap: '$28B'
        },
        businessModel: 'Holds gold bars → Issues shares → Tracks gold spot price',
        momentum: [85, 88, 92, 98, 105, 115, 125, 138, 150, 162, 175, 188, 200, 212, 225, 238, 250, 262],
        analystConsensus: {
          bull: 'Central banks printing money. Gold is the only real currency.',
          neutral: 'Crisis hedge but doesn\'t produce income.',
          bear: 'Deflation means cash is king. Gold will fall with everything else.'
        },
        risks: ['Deflation forces liquidation', 'Dollar strength pressures gold', 'No yield opportunity cost'],
        eventImpact: { crisis: 0.35, bailout: 0.45, recovery: -0.15 }
      }
    ],
    events: [
      { title: 'Lehman Bankruptcy', brief: 'Lehman Brothers files Chapter 11. Largest bankruptcy in U.S. history.', type: 'crisis' },
      { title: 'AIG Bailout', brief: 'Federal Reserve takes 79.9% stake in AIG for $85 billion.', type: 'bailout' },
      { title: 'TARP Announced', brief: 'Treasury unveils $700 billion Troubled Asset Relief Program.', type: 'bailout' },
      { title: 'Commercial Paper Freezes', brief: 'Companies cannot roll over short-term debt. Payroll risk emerges.', type: 'crisis' },
      { title: 'Buffett Deploys Capital', brief: 'Berkshire invests $43 billion in Goldman, GE, and others.', type: 'recovery' },
      { title: 'Stress Test Results', brief: 'Banks pass stress tests. Confidence returns. Rally begins.', type: 'recovery' }
    ],
    fearGreedStart: 8, // Extreme Fear -> recovers
    sectors: [
      { name: 'Finance', performance: -68 },
      { name: 'Real Estate', performance: -75 },
      { name: 'Materials', performance: -55 },
      { name: 'Energy', performance: -48 },
      { name: 'Industrials', performance: -42 },
      { name: 'Consumer', performance: -35 },
      { name: 'Technology', performance: -22 },
      { name: 'Healthcare', performance: -12 },
      { name: 'Gold/Commodities', performance: 45 }
    ]
  }
];

export const marketNewsHeadlines = {
  '1929': [
    'STOCK PRICES COLLAPSE IN PANIC SELLING',
    'BROKERAGE FIRMS CLOSE DOORS AS MARGIN CALLS MOUNT',
    'BANK RUNS SPREAD ACROSS MAJOR CITIES',
    'FEDERAL RESERVE REFUSES TO INTERVENE',
    'UNEMPLOYMENT LINES FORM OUTSIDE FACTORIES',
    'HOOVER PROMISES PROSPERITY IS JUST AROUND THE CORNER'
  ],
  '1991': [
    'INDIA DEFAULT IMMINENT: RESERVES AT 2-WEEK LOW',
    'GOLD AIRLIFTED TO LONDON FOR IMF COLLATERAL',
    'RAO GOVERNMENT BETS ON RADICAL REFORMS',
    'MANMOHAN SINGH PREPARES HISTORIC BUDGET',
    'FOREIGN INVESTORS EYE INDIA AFTER LIBERALIZATION',
    'SENSEX RALLIES ON REFORM OPTIMISM'
  ],
  '1992': [
    'HARSHAD MEHTA STOCKS HIT RECORD HIGHS',
    'BANK RECEIPTS UNDER RBI SCRUTINY',
    'JOURNALIST ALLEGES MASSIVE SECURITIES FRAUD',
    'MEHTA DISAPPEARS AS ARREST WARRANT ISSUED',
    'SENSEX PLUMMETS ON SCAM REVELATIONS',
    'SMALL INVESTORS RUINED AS STOCKS COLLAPSE'
  ],
  '2008': [
    'LEHMAN BROTHERS FILES FOR BANKRUPTCY',
    'AIG NEEDS $85 BILLION BAILOUT',
    'CREDIT MARKETS FREEZE GLOBALLY',
    'TREASURY UNVEILS $700B TARP PROGRAM',
    'BUFFETT DEPLOYS billions IN CRISIS',
    'MARKETS STABILIZE AFTER STRESS TESTS'
  ]
};
