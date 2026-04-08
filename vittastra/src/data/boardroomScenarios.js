// Boardroom Simulator Scenarios Data

export const boardroomScenarios = [
  {
    id: 'netflix-2011',
    company: 'Netflix',
    year: 2011,
    stakes: 'You just split your company in two and lost 800,000 subscribers in a month. The board is watching.',
    description: 'July 2011. Netflix announced Qwikster — splitting DVD and streaming into separate services. Customers revolted. 800,000 subscribers left in one quarter. Stock dropped 75%. Reed Hastings faces the board.',
    slides: [
      {
        type: 'company-today',
        title: 'Netflix Today',
        content: {
          description: 'World\'s largest video rental service transitioning from DVDs to streaming',
          stats: [
            { label: 'Subscribers', value: '25M', change: '-3%' },
            { label: 'Revenue (Q2)', value: '$824M', change: '+16%' },
            { label: 'Stock Price', value: '$13.50', change: '-75%' }
          ],
          revenueTrend: [
            { year: '2007', revenue: 1200 },
            { year: '2008', revenue: 1360 },
            { year: '2009', revenue: 1670 },
            { year: '2010', revenue: 2160 },
            { year: '2011', revenue: 2800 }
          ]
        }
      },
      {
        type: 'market',
        title: 'The Market',
        content: {
          description: 'Video entertainment shifting from physical media to digital streaming. Broadband adoption accelerating.',
          marketShare: [
            { name: 'Netflix', value: 65 },
            { name: 'Redbox', value: 20 },
            { name: 'Blockbuster', value: 10 },
            { name: 'Others', value: 5 }
          ],
          industryContext: 'Streaming infrastructure improving. Content licensing costs rising. Cable companies launching competitors.'
        }
      },
      {
        type: 'crisis',
        title: 'The Crisis',
        content: {
          problem: 'Qwikster backlash. Customers hate the split. Brand trust shattered.',
          timeline: [
            { date: 'Jan 2011', event: 'Netflix hits 25M subscribers' },
            { date: 'Apr 2011', event: 'First price increase announced' },
            { date: 'Jul 2011', event: 'Qwikster split announced' },
            { date: 'Aug 2011', event: 'Customer outrage explodes' },
            { date: 'Sep 2011', event: '800K subscribers lost' },
            { date: 'Oct 2011', event: 'YOU ARE HERE' }
          ]
        }
      },
      {
        type: 'financials',
        title: 'Financials Under Pressure',
        content: {
          chartType: 'dual-line',
          data: [
            { month: 'May', revenue: 750, churn: 2 },
            { month: 'Jun', revenue: 780, churn: 3 },
            { month: 'Jul', revenue: 820, churn: 8 },
            { month: 'Aug', revenue: 790, churn: 15 },
            { month: 'Sep', revenue: 720, churn: 18 },
            { month: 'Oct', revenue: 680, churn: 12 }
          ],
          metric1Label: 'Revenue ($M)',
          metric2Label: 'Churn Rate (%)',
          annotation: 'Churn spike after Qwikster announcement'
        }
      },
      {
        type: 'board-speaks',
        title: 'The Board Speaks',
        content: {
          speakers: [
            {
              name: 'Reed Hastings',
              title: 'CEO',
              argument: 'We moved too fast and explained too little. But the direction is right — streaming is the future. We need to stay the course but fix the execution.',
              translation: 'In plain terms: the strategy is correct, but we botched the rollout.'
            },
            {
              name: 'David Wells',
              title: 'CFO',
              argument: 'Our stock is down 75%. Subscriber losses are accelerating. We need to reverse Qwikster immediately and focus on damage control.',
              translation: 'In plain terms: stop the bleeding before investors flee completely.'
            },
            {
              name: 'Marc Randolph',
              title: 'Co-founder & Advisor',
              argument: 'This is a leadership crisis, not a strategy crisis. Reed needs to apologize publicly, take responsibility, and rebuild trust before fixing anything.',
              translation: 'In plain terms: fix the relationship with customers before fixing the product.'
            }
          ]
        }
      }
    ],
    decisions: [
      {
        id: 'reverse-qwikster',
        title: 'Reverse Qwikster Immediately',
        rationale: 'Bring DVD and streaming back together. Apologize publicly. Accept the short-term cost to preserve long-term trust.',
        riskLevel: 'MEDIUM',
        timeHorizon: 'Quick Win',
        translation: 'Admit the mistake and undo it. Painful but necessary.',
        outcome: {
          actual: true,
          result: 'Reed reversed Qwikster in October 2011. Subscribers stabilized within 2 quarters. Stock recovered over next 3 years, returning 10x by 2015.',
          metrics: [
            { year: '2012', subscribers: '28M' },
            { year: '2013', subscribers: '36M' },
            { year: '2014', subscribers: '50M' }
          ]
        },
        alternateOutcomes: [
          {
            decision: 'Stay the Course',
            outcome: 'Subscriber losses continue through 2012. Redbox gains ground. Netflix forced to reverse anyway at greater cost. Stock stagnates for 5 years.'
          },
          {
            decision: 'Double Down',
            outcome: 'Aggressive push to streaming accelerates cord-cutting but alienates remaining DVD customers. Competitors exploit the confusion. Market share drops to 40%.'
          }
        ]
      },
      {
        id: 'stay-course',
        title: 'Stay the Course',
        rationale: 'Qwikster is the right strategic move. Explain better, but don\'t reverse. Short-term pain for long-term gain.',
        riskLevel: 'HIGH',
        timeHorizon: '2-Year Bet',
        translation: 'Stick with the plan despite the backlash.',
        outcome: {
          actual: false,
          result: 'Hypothetical: Continued subscriber losses would have pressured the board to replace leadership. Strategic clarity might have eventually won, but at much higher cost.',
          metrics: []
        },
        alternateOutcomes: []
      },
      {
        id: 'apology-only',
        title: 'Apologize Without Reversing',
        rationale: 'Issue a heartfelt apology but keep Qwikster structure. Try to win back trust through better communication and customer service.',
        riskLevel: 'HIGH',
        timeHorizon: '2-Year Bet',
        translation: 'Say sorry but don\'t change the product.',
        outcome: {
          actual: false,
          result: 'Hypothetical: Apology without action feels hollow. Customer exodus continues. Board loses confidence. Forced reversal comes later at worse terms.',
          metrics: []
        },
        alternateOutcomes: []
      }
    ],
    fingerprintAxes: ['Risk Appetite', 'Innovation', 'People Bet', 'Strategic Clarity', 'Financial Discipline']
  },
  {
    id: 'amazon-2003',
    company: 'Amazon',
    year: 2003,
    stakes: 'AWS is just an internal tool. Your engineers say open it to the world. The CFO says it\'s a distraction.',
    description: 'Early 2003. Amazon\'s infrastructure team built powerful internal tools. Engineers propose selling these as a service. CFO warns of massive investment with unclear returns. Jeff Bezos must decide.',
    slides: [
      {
        type: 'company-today',
        title: 'Amazon Today',
        content: {
          description: 'Online retailer expanding beyond books into everything. Thin margins, heavy reinvestment.',
          stats: [
            { label: 'Revenue', value: '$5.3B', change: '+26%' },
            { label: 'Profit Margin', value: '1.2%', change: '-0.3%' },
            { label: 'Stock Price', value: '$52', change: '+15%' }
          ],
          revenueTrend: [
            { year: '1999', revenue: 1640 },
            { year: '2000', revenue: 2760 },
            { year: '2001', revenue: 3120 },
            { year: '2002', revenue: 3930 },
            { year: '2003', revenue: 5260 }
          ]
        }
      },
      {
        type: 'market',
        title: 'The Market',
        content: {
          description: 'Enterprise software sold by IBM, Oracle, Microsoft. Expensive, complex, requires dedicated IT teams.',
          marketShare: [
            { name: 'IBM', value: 35 },
            { name: 'Oracle', value: 25 },
            { name: 'Microsoft', value: 20 },
            { name: 'Others', value: 20 }
          ],
          industryContext: 'Dot-com crash left cheap datacenter capacity. Startups need infrastructure without capital expense.'
        }
      },
      {
        type: 'crisis',
        title: 'The Decision',
        content: {
          problem: 'Build AWS or stay focused on retail?',
          timeline: [
            { date: '1999', event: 'Amazon builds internal infrastructure' },
            { date: '2001', event: 'Team realizes tools could be external products' },
            { date: '2002', event: 'Engineers prototype API-based services' },
            { date: 'Early 2003', event: 'Proposal to launch AWS' },
            { date: 'Mid 2003', event: 'CFO raises concerns' },
            { date: 'Late 2003', event: 'YOU ARE HERE' }
          ]
        }
      },
      {
        type: 'financials',
        title: 'Investment Required',
        content: {
          chartType: 'investment-vs-return',
          data: [
            { year: '2004', investment: 200, return: 0 },
            { year: '2005', investment: 400, return: 50 },
            { year: '2006', investment: 600, return: 200 },
            { year: '2007', investment: 800, return: 500 },
            { year: '2008', investment: 1000, return: 1200 }
          ],
          metric1Label: 'Investment ($M)',
          metric2Label: 'Revenue ($M)',
          annotation: 'Years of losses before profitability'
        }
      },
      {
        type: 'board-speaks',
        title: 'The Board Speaks',
        content: {
          speakers: [
            {
              name: 'Jeff Bezos',
              title: 'CEO',
              argument: 'This is a once-in-a-generation opportunity. Every startup will need this. Yes, it\'s expensive. Yes, it\'s risky. But the winner takes all.',
              translation: 'In plain terms: big risk, bigger reward if we\'re right.'
            },
            {
              name: 'Tom Szkutak',
              title: 'CFO',
              argument: 'We\'re barely profitable. Retail margins are thin. This diverts billions from our core business with no guaranteed return.',
              translation: 'In plain terms: we can\'t afford to gamble with money we don\'t have.'
            },
            {
              name: 'Andy Jassy',
              title: 'Engineering Lead',
              argument: 'We\'ve already built 80% of this internally. The incremental cost is manageable. First-mover advantage in cloud is enormous.',
              translation: 'In plain terms: most of the work is done. Let\'s finish it.'
            }
          ]
        }
      }
    ],
    decisions: [
      {
        id: 'launch-aws',
        title: 'Launch AWS',
        rationale: 'Invest heavily in cloud infrastructure. Accept years of losses for potential market dominance.',
        riskLevel: 'EXISTENTIAL',
        timeHorizon: 'Decade Play',
        translation: 'Bet the company on a new business model.',
        outcome: {
          actual: true,
          result: 'AWS launched in 2006. By 2020, AWS generated $45B revenue with 30% operating margins. Became Amazon\'s profit engine, subsidizing retail expansion.',
          metrics: [
            { year: '2010', revenue: '$500M' },
            { year: '2015', revenue: '$10B' },
            { year: '2020', revenue: '$45B' }
          ]
        },
        alternateOutcomes: [
          {
            decision: 'Delay Launch',
            outcome: 'Microsoft Azure launches first in 2008. Google Cloud follows. Amazon plays catch-up, captures only 15% market share instead of 32%.'
          },
          {
            decision: 'Don\'t Launch',
            outcome: 'Amazon remains pure-play retailer. Margins stay thin. Stock underperforms for decade. Misses biggest profit driver in company history.'
          }
        ]
      },
      {
        id: 'pilot-program',
        title: 'Limited Pilot Program',
        rationale: 'Test AWS with select partners before full commitment. Reduce risk while validating demand.',
        riskLevel: 'MEDIUM',
        timeHorizon: '2-Year Bet',
        translation: 'Try it small before going big.',
        outcome: {
          actual: false,
          result: 'Hypothetical: Slower ramp gives competitors time to establish. AWS still succeeds but captures smaller market share.',
          metrics: []
        },
        alternateOutcomes: []
      },
      {
        id: 'internal-only',
        title: 'Keep Internal Only',
        rationale: 'Focus on retail. Infrastructure is a cost center, not a business. Don\'t distract from core mission.',
        riskLevel: 'LOW',
        timeHorizon: 'Quick Win',
        translation: 'Stay in your lane.',
        outcome: {
          actual: false,
          result: 'Hypothetical: Amazon remains retailer-only. Misses cloud revolution entirely. Competitors dominate infrastructure layer.',
          metrics: []
        },
        alternateOutcomes: []
      }
    ],
    fingerprintAxes: ['Risk Appetite', 'Innovation', 'Strategic Clarity', 'Financial Discipline', 'People Bet']
  },
  {
    id: 'infosys-1999',
    company: 'Infosys',
    year: 1999,
    stakes: 'Y2K is printing money but it ends in 12 months. Do you bet the company on what comes next?',
    description: 'Late 1999. Y2K consulting contracts are flooding in. Revenue up 70%. But everyone knows Y2K work ends December 31, 1999. Narayana Murthy must decide: milk Y2K or pivot now?',
    slides: [
      {
        type: 'company-today',
        title: 'Infosys Today',
        content: {
          description: 'Indian IT services company riding Y2K wave. Known for quality, dependent on temporary demand.',
          stats: [
            { label: 'Revenue', value: '$260M', change: '+70%' },
            { label: 'Employees', value: '8,600', change: '+45%' },
            { label: 'Stock Price', value: '₹4,200', change: '+180%' }
          ],
          revenueTrend: [
            { year: '1995', revenue: 45 },
            { year: '1996', revenue: 72 },
            { year: '1997', revenue: 118 },
            { year: '1998', revenue: 185 },
            { year: '1999', revenue: 260 }
          ]
        }
      },
      {
        type: 'market',
        title: 'The Market',
        content: {
          description: 'Y2K remediation is temporary. Long-term opportunity in ongoing IT outsourcing and software development.',
          marketShare: [
            { name: 'TCS', value: 30 },
            { name: 'Infosys', value: 25 },
            { name: 'Wipro', value: 20 },
            { name: 'Others', value: 25 }
          ],
          industryContext: 'Western companies discovering Indian talent arbitrage. Y2K is gateway drug to broader outsourcing.'
        }
      },
      {
        type: 'crisis',
        title: 'The Cliff',
        content: {
          problem: 'Y2K revenue disappears January 1, 2000. What replaces it?',
          timeline: [
            { date: '1996', event: 'Y2K contracts begin flowing' },
            { date: '1997', event: 'Infosys hires 2,000 engineers' },
            { date: '1998', event: 'Revenue doubles' },
            { date: '1999 Q1', event: 'Peak Y2K demand' },
            { date: '1999 Q4', event: 'Y2K work winding down' },
            { date: 'Dec 1999', event: 'YOU ARE HERE' }
          ]
        }
      },
      {
        type: 'financials',
        title: 'The Y2K Cliff',
        content: {
          chartType: 'projection',
          data: [
            { quarter: 'Q4 1999', y2kRevenue: 180, nonY2kRevenue: 80 },
            { quarter: 'Q1 2000', y2kRevenue: 50, nonY2kRevenue: 85 },
            { quarter: 'Q2 2000', y2kRevenue: 20, nonY2kRevenue: 90 },
            { quarter: 'Q3 2000', y2kRevenue: 10, nonY2kRevenue: 95 },
            { quarter: 'Q4 2000', y2kRevenue: 5, nonY2kRevenue: 100 }
          ],
          metric1Label: 'Y2K Revenue ($M)',
          metric2Label: 'Non-Y2K Revenue ($M)',
          annotation: 'Y2K revenue collapses in 2000'
        }
      },
      {
        type: 'board-speaks',
        title: 'The Board Speaks',
        content: {
          speakers: [
            {
              name: 'N.R. Narayana Murthy',
              title: 'Chairman',
              argument: 'Y2K proved Indian engineers can deliver world-class work. Now we must convince clients that Infosys is their long-term partner, not a Y2K vendor.',
              translation: 'In plain terms: use Y2K credibility to win permanent contracts.'
            },
            {
              name: 'Nandan Nilekani',
              title: 'CEO',
              argument: 'We should invest Y2K profits in building capabilities for enterprise software, not just maintenance. Position for the next decade.',
              translation: 'In plain terms: upgrade from code monkeys to strategic partners.'
            },
            {
              name: 'Board Member',
              title: 'Independent Director',
              argument: 'Take the Y2K money and return it to shareholders. Don\'t over-invest based on temporary demand. Stay lean.',
              translation: 'In plain terms: cash out while times are good.'
            }
          ]
        }
      }
    ],
    decisions: [
      {
        id: 'pivot-enterprise',
        title: 'Pivot to Enterprise Software',
        rationale: 'Use Y2K profits to build capabilities in ERP, consulting, and long-term outsourcing contracts. Invest in training and certifications.',
        riskLevel: 'HIGH',
        timeHorizon: 'Decade Play',
        translation: 'Transform from Y2K shop to strategic partner.',
        outcome: {
          actual: true,
          result: 'Infosys pivoted successfully. Won major SAP, Oracle contracts. Revenue grew from $260M (1999) to $10B (2010). Became global IT services leader.',
          metrics: [
            { year: '2002', revenue: '$550M' },
            { year: '2005', revenue: '$2B' },
            { year: '2010', revenue: '$10B' }
          ]
        },
        alternateOutcomes: [
          {
            decision: 'Stay Y2K Focused',
            outcome: 'Revenue collapses 60% in 2000. Layoffs required. Reputation damaged. Company never recovers prominence.'
          },
          {
            decision: 'Return Cash',
            outcome: 'Short-term shareholder happiness. Long-term irrelevance. TCS and Wipro capture market share during transformation period.'
          }
        ]
      },
      {
        id: 'maintain-course',
        title: 'Maintain Current Course',
        rationale: 'Continue winning Y2K work while it lasts. Figure out next act later. Maximize short-term cash.',
        riskLevel: 'MEDIUM',
        timeHorizon: 'Quick Win',
        translation: 'Keep the money coming while you can.',
        outcome: {
          actual: false,
          result: 'Hypothetical: 2000 revenue crash forces reactive pivot. Less capital, lower morale, weaker competitive position.',
          metrics: []
        },
        alternateOutcomes: []
      },
      {
        id: 'diversify-geography',
        title: 'Diversify Geography First',
        rationale: 'Expand beyond US clients into Europe and Asia. Reduce concentration risk before capability expansion.',
        riskLevel: 'MEDIUM',
        timeHorizon: '2-Year Bet',
        translation: 'New markets before new services.',
        outcome: {
          actual: false,
          result: 'Hypothetical: Geographic diversification helps but doesn\'t solve capability gap. Still vulnerable to commoditization.',
          metrics: []
        },
        alternateOutcomes: []
      }
    ],
    fingerprintAxes: ['Risk Appetite', 'Innovation', 'Strategic Clarity', 'Financial Discipline', 'People Bet']
  },
  {
    id: 'zomato-2021',
    company: 'Zomato',
    year: 2021,
    stakes: 'Blinkit is burning ₹400Cr a month. Deepinder wants to acquire it. The Street thinks he\'s lost his mind.',
    description: 'June 2021. Zomato preparing for IPO. Quick commerce is exploding. Blinkit (formerly Grofers) available for acquisition. Burning cash but growing fast. Investors nervous about post-IPO burn.',
    slides: [
      {
        type: 'company-today',
        title: 'Zomato Today',
        content: {
          description: 'Food delivery leader preparing for IPO. Path to profitability unclear. Quick commerce emerging as adjacent opportunity.',
          stats: [
            { label: 'Orders/Month', value: '18M', change: '+35%' },
            { label: 'Revenue', value: '₹3,200Cr', change: '+52%' },
            { label: 'Burn Rate', value: '₹450Cr/qtr', change: '-15%' }
          ],
          revenueTrend: [
            { year: '2017', revenue: 350 },
            { year: '2018', revenue: 620 },
            { year: '2019', revenue: 1100 },
            { year: '2020', revenue: 1900 },
            { year: '2021', revenue: 3200 }
          ]
        }
      },
      {
        type: 'market',
        title: 'The Market',
        content: {
          description: 'Food delivery maturing. Quick commerce (10-min grocery delivery) exploding. Unit economics unproven at scale.',
          marketShare: [
            { name: 'Zomato', value: 55 },
            { name: 'Swiggy', value: 40 },
            { name: 'Others', value: 5 }
          ],
          industryContext: 'Quick commerce requires dense dark store network. High capex, high burn, potential winner-take-all dynamics.'
        }
      },
      {
        type: 'crisis',
        title: 'The Acquisition Decision',
        content: {
          problem: 'Acquire Blinkit pre-IPO or stay focused on food?',
          timeline: [
            { date: '2020', event: 'COVID accelerates food delivery' },
            { date: '2021 Q1', event: 'Quick commerce emerges' },
            { date: '2021 Q2', event: 'Blinkit available for acquisition' },
            { date: '2021 Q3', event: 'IPO preparation underway' },
            { date: '2021 Q4', event: 'Investor pressure mounting' },
            { date: 'Jun 2021', event: 'YOU ARE HERE' }
          ]
        }
      },
      {
        type: 'financials',
        title: 'Combined Burn Profile',
        content: {
          chartType: 'dual-line',
          data: [
            { quarter: 'Q1 2021', foodBurn: 450, blinkitBurn: 0 },
            { quarter: 'Q2 2021', foodBurn: 400, blinkitBurn: 400 },
            { quarter: 'Q3 2021', foodBurn: 350, blinkitBurn: 500 },
            { quarter: 'Q4 2021', foodBurn: 300, blinkitBurn: 600 },
            { quarter: 'Q1 2022', foodBurn: 250, blinkitBurn: 700 }
          ],
          metric1Label: 'Food Delivery Burn (₹Cr)',
          metric2Label: 'Blinkit Burn (₹Cr)',
          annotation: 'Combined burn doubles post-acquisition'
        }
      },
      {
        type: 'board-speaks',
        title: 'The Board Speaks',
        content: {
          speakers: [
            {
              name: 'Deepinder Goyal',
              title: 'CEO',
              argument: 'Quick commerce is the next frontier. If we don\'t own it, Swiggy will. Yes, burn increases. But total addressable market triples.',
              translation: 'In plain terms: pay now or lose the future.'
            },
            {
              name: 'Mohit Gupta',
              title: 'Board Member',
              argument: 'IPO investors want a path to profitability. Adding ₹400Cr/month burn sends wrong signal. Valuation will suffer.',
              translation: 'In plain terms: this kills our IPO valuation.'
            },
            {
              name: 'Sequoia Partner',
              title: 'Investor',
              argument: 'We\'ve seen this movie. High-burn hyperlocal models rarely achieve unit economics. Prove Blinkit can work before betting the company.',
              translation: 'In plain terms: show me the math before I write the check.'
            }
          ]
        }
      }
    ],
    decisions: [
      {
        id: 'acquire-blinkit',
        title: 'Acquire Blinkit',
        rationale: 'Buy quick commerce leadership now. Integrate with Zomato delivery network. Accept higher burn for larger TAM.',
        riskLevel: 'EXISTENTIAL',
        timeHorizon: 'Decade Play',
        translation: 'Go big on the next wave.',
        outcome: {
          actual: true,
          result: 'Zomato acquired Blinkit for $570M. Initial investor backlash. By 2023, quick commerce contribution margin turned positive. Combined entity valued at $12B.',
          metrics: [
            { year: '2022', blinkitGMV: '₹4,500Cr' },
            { year: '2023', blinkitGMV: '₹9,000Cr' },
            { year: '2024', blinkitGMV: '₹15,000Cr' }
          ]
        },
        alternateOutcomes: [
          {
            decision: 'Don\'t Acquire',
            outcome: 'Swiggy acquires Blinkit or builds Instamart. Captures quick commerce market. Zomato remains food-only, valued at 40% discount.'
          },
          {
            decision: 'Build In-House',
            outcome: 'Zomato launches Zomato Instant. 18-month delay building network. Swiggy captures first-mover advantage. Catch-up costs exceed acquisition price.'
          }
        ]
      },
      {
        id: 'wait-watch',
        title: 'Wait and Watch',
        rationale: 'Let others prove quick commerce model. Enter later if unit economics work. Preserve IPO valuation.',
        riskLevel: 'MEDIUM',
        timeHorizon: '2-Year Bet',
        translation: 'Let others make mistakes first.',
        outcome: {
          actual: false,
          result: 'Hypothetical: Quick commerce winners established by 2023. Zomato enters as #3. Lower growth, lower valuation multiple.',
          metrics: []
        },
        alternateOutcomes: []
      },
      {
        id: 'pilot-cities',
        title: 'Pilot in Select Cities',
        rationale: 'Test quick commerce in 3-4 cities before full acquisition. Validate unit economics with limited exposure.',
        riskLevel: 'LOW',
        timeHorizon: 'Quick Win',
        translation: 'Small bets before big commitments.',
        outcome: {
          actual: false,
          result: 'Hypothetical: Pilot shows promise but lacks scale advantages. Competitors with full commitment win key locations and partnerships.',
          metrics: []
        },
        alternateOutcomes: []
      }
    ],
    fingerprintAxes: ['Risk Appetite', 'Innovation', 'Strategic Clarity', 'Financial Discipline', 'People Bet']
  }
];
