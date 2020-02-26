const graphs = [{
	id: 'SavedObjectsDependency',
    name: 'Saved Objects Dependency',
    type: 'flowchart',
	code: `graph TD
	GR[Graphs] --> RE[Relations]
	GR[Graphs] --> SE[Searches]
  
	RMG[Relational Model Graphs] --> RE[Relations]
	RMG[Relational Model Graphs] --> SE[Searches]
  
	DG[Dashboard Groups] --> DA[Dashboard]
   
	DA[Dashboard] -.saved filters.-> SE[Searches]
  
	RE[Relations] --> EIDS[EIDS]
	RE[Relations] --> SE[Searches]
  
	IP[Index Patterns] -.-> EI[Elastic Indices]
	IP[Index Patterns] -.-> VEI[Virtual Indices]
	
	VEI[Virtual Indices] -.-> EI[Elastic Indices]
  
	VEI[Virtual Indices] -.-> DTS[Data Sources eg. JDBC]
	
	VI[Visualization] -.saved filters.-> SE[Searches]  
  
   subgraph SEIP[ ]
	SE[Searches] --- IP[Index Patterns]
  end`
},
{
	id: 'SequenceDiagram',
	name: 'SequenceDiagram',
	code: `sequenceDiagram
	Alice->>+John: Hello John, how are you?
	Alice->>+John: John, can you hear me?
	John-->>-Alice: Hi Alice, I can hear you!
	John-->>-Alice: I feel great!`
}, {
	id: 'ClassDiagram',
	name: 'ClassDiagram',
	code: `classDiagram
	Animal <|-- Duck
	Animal <|-- Fish
	Animal <|-- Zebra
	Animal : +int age
	Animal : +String gender
	Animal: +isMammal()
	Animal: +mate()
	class Duck{
		+String beakColor
		+swim()
		+quack()
	}
	class Fish{
		-int sizeInFeet
		-canEat()
	}
	class Zebra{
		+bool is_wild
		+run()
	}
					`
},{

	id: 'StateDiagram',
	name: 'StateDiagram',
	code: `stateDiagram
	[*] --> Still
	Still --> [*]

	Still --> Moving
	Moving --> Still
	Moving --> Crash
	Crash --> [*]
					`
},{

	id: 'GanttChart',
	name: 'GanttChart',
	code: `gantt
	title A Gantt Diagram
	dateFormat  YYYY-MM-DD
	section Section
	A task           :a1, 2014-01-01, 30d
	Another task     :after a1  , 20d
	section Another
	Task in sec      :2014-01-12  , 12d
	another task      : 24d
					`
},{

	id: 'PieChart',
	name: 'PieChart',
	code: `pie title Pets adopted by volunteers
	"Dogs" : 386
	"Cats" : 85
	"Rats" : 15
					`
}];

export { graphs };