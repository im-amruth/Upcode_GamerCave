export const cheatsheetData = [
  {
    id: 'javascript',
    name: 'JavaScript',
    icon: 'FileCode',
    color: '#f7df1e',
    description: 'Modern JavaScript ES6+ syntax and features',
    difficulty: 'Beginner',
    sections: [
      {
        title: 'Variables & Data Types',
        items: [
          { code: 'let name = "John";', description: 'Mutable variable' },
          { code: 'const PI = 3.14;', description: 'Immutable constant' },
          { code: 'var old = "legacy";', description: 'Legacy variable (avoid)' },
          { code: 'typeof variable', description: 'Check variable type' },
          { code: 'String, Number, Boolean, null, undefined, Symbol, BigInt', description: 'Primitive types' }
        ]
      },
      {
        title: 'Arrays',
        items: [
          { code: 'arr.push(item)', description: 'Add to end' },
          { code: 'arr.pop()', description: 'Remove from end' },
          { code: 'arr.map(fn)', description: 'Transform each element' },
          { code: 'arr.filter(fn)', description: 'Filter elements' },
          { code: 'arr.reduce(fn, init)', description: 'Reduce to single value' },
          { code: '[...arr]', description: 'Spread operator (copy)' }
        ]
      },
      {
        title: 'Functions',
        items: [
          { code: 'function greet(name) { }', description: 'Function declaration' },
          { code: 'const greet = (name) => { }', description: 'Arrow function' },
          { code: '(x) => x * 2', description: 'Implicit return' },
          { code: 'async function() { await promise }', description: 'Async/await' }
        ]
      },
      {
        title: 'Objects',
        items: [
          { code: 'const obj = { key: value }', description: 'Object literal' },
          { code: 'obj.key or obj["key"]', description: 'Access properties' },
          { code: '{ ...obj }', description: 'Spread operator' },
          { code: 'Object.keys(obj)', description: 'Get all keys' },
          { code: 'Object.values(obj)', description: 'Get all values' }
        ]
      }
    ]
  },
  {
    id: 'python',
    name: 'Python',
    icon: 'Cpu',
    color: '#3776ab',
    description: 'Python 3 essentials and common patterns',
    difficulty: 'Beginner',
    sections: [
      {
        title: 'Variables & Data Types',
        items: [
          { code: 'name = "John"', description: 'String variable' },
          { code: 'age = 25', description: 'Integer' },
          { code: 'price = 19.99', description: 'Float' },
          { code: 'is_active = True', description: 'Boolean' },
          { code: 'type(variable)', description: 'Check type' }
        ]
      },
      {
        title: 'Lists',
        items: [
          { code: 'lst = [1, 2, 3]', description: 'Create list' },
          { code: 'lst.append(4)', description: 'Add to end' },
          { code: 'lst[0]', description: 'Access by index' },
          { code: 'lst[1:3]', description: 'Slice list' },
          { code: '[x*2 for x in lst]', description: 'List comprehension' }
        ]
      },
      {
        title: 'Dictionaries',
        items: [
          { code: 'dict = {"key": "value"}', description: 'Create dictionary' },
          { code: 'dict["key"]', description: 'Access value' },
          { code: 'dict.get("key", default)', description: 'Safe access' },
          { code: 'dict.keys()', description: 'Get all keys' },
          { code: 'dict.items()', description: 'Get key-value pairs' }
        ]
      },
      {
        title: 'Functions',
        items: [
          { code: 'def func(param):\n    return value', description: 'Define function' },
          { code: 'lambda x: x * 2', description: 'Lambda function' },
          { code: 'def func(*args, **kwargs):', description: 'Variable arguments' }
        ]
      },
      {
        title: 'Control Flow',
        items: [
          { code: 'if condition:\n    pass', description: 'If statement' },
          { code: 'for item in iterable:', description: 'For loop' },
          { code: 'while condition:', description: 'While loop' },
          { code: 'try:\n    pass\nexcept Exception as e:', description: 'Error handling' }
        ]
      }
    ]
  },
  {
    id: 'react',
    name: 'React',
    icon: 'Braces',
    color: '#61dafb',
    description: 'React hooks and component patterns',
    difficulty: 'Intermediate',
    sections: [
      {
        title: 'Components',
        items: [
          { code: 'function Component() { return <div /> }', description: 'Functional component' },
          { code: 'export default Component', description: 'Default export' },
          { code: '<Component prop={value} />', description: 'Pass props' },
          { code: 'const {prop} = props', description: 'Destructure props' }
        ]
      },
      {
        title: 'Hooks',
        items: [
          { code: 'const [state, setState] = useState(initial)', description: 'State hook' },
          { code: 'useEffect(() => { }, [deps])', description: 'Effect hook' },
          { code: 'const value = useContext(Context)', description: 'Context hook' },
          { code: 'const ref = useRef(null)', description: 'Ref hook' },
          { code: 'const memo = useMemo(() => value, [deps])', description: 'Memoization' }
        ]
      },
      {
        title: 'Event Handling',
        items: [
          { code: 'onClick={() => handleClick()}', description: 'Click handler' },
          { code: 'onChange={(e) => setValue(e.target.value)}', description: 'Input change' },
          { code: 'onSubmit={(e) => e.preventDefault()}', description: 'Form submit' }
        ]
      },
      {
        title: 'Conditional Rendering',
        items: [
          { code: '{condition && <Component />}', description: 'AND operator' },
          { code: '{condition ? <A /> : <B />}', description: 'Ternary operator' },
          { code: '{items.map(item => <Item key={item.id} />)}', description: 'List rendering' }
        ]
      }
    ]
  },
  {
    id: 'git',
    name: 'Git',
    icon: 'Terminal',
    color: '#f05032',
    description: 'Essential Git commands for version control',
    difficulty: 'Beginner',
    sections: [
      {
        title: 'Setup',
        items: [
          { code: 'git init', description: 'Initialize repository' },
          { code: 'git clone <url>', description: 'Clone repository' },
          { code: 'git config --global user.name "Name"', description: 'Set username' },
          { code: 'git config --global user.email "email"', description: 'Set email' }
        ]
      },
      {
        title: 'Basic Commands',
        items: [
          { code: 'git status', description: 'Check status' },
          { code: 'git add <file>', description: 'Stage file' },
          { code: 'git add .', description: 'Stage all files' },
          { code: 'git commit -m "message"', description: 'Commit changes' },
          { code: 'git push origin <branch>', description: 'Push to remote' },
          { code: 'git pull', description: 'Pull from remote' }
        ]
      },
      {
        title: 'Branching',
        items: [
          { code: 'git branch', description: 'List branches' },
          { code: 'git branch <name>', description: 'Create branch' },
          { code: 'git checkout <branch>', description: 'Switch branch' },
          { code: 'git checkout -b <branch>', description: 'Create and switch' },
          { code: 'git merge <branch>', description: 'Merge branch' }
        ]
      },
      {
        title: 'Undo Changes',
        items: [
          { code: 'git reset HEAD <file>', description: 'Unstage file' },
          { code: 'git checkout -- <file>', description: 'Discard changes' },
          { code: 'git revert <commit>', description: 'Revert commit' },
          { code: 'git reset --hard <commit>', description: 'Reset to commit' }
        ]
      }
    ]
  },
  {
    id: 'sql',
    name: 'SQL',
    icon: 'Database',
    color: '#00758f',
    description: 'SQL queries and database operations',
    difficulty: 'Intermediate',
    sections: [
      {
        title: 'SELECT Queries',
        items: [
          { code: 'SELECT * FROM table', description: 'Select all columns' },
          { code: 'SELECT col1, col2 FROM table', description: 'Select specific columns' },
          { code: 'SELECT * FROM table WHERE condition', description: 'Filter rows' },
          { code: 'SELECT * FROM table ORDER BY col ASC/DESC', description: 'Sort results' },
          { code: 'SELECT * FROM table LIMIT 10', description: 'Limit results' }
        ]
      },
      {
        title: 'INSERT & UPDATE',
        items: [
          { code: 'INSERT INTO table (col1, col2) VALUES (val1, val2)', description: 'Insert row' },
          { code: 'UPDATE table SET col1 = val WHERE condition', description: 'Update rows' },
          { code: 'DELETE FROM table WHERE condition', description: 'Delete rows' }
        ]
      },
      {
        title: 'Joins',
        items: [
          { code: 'SELECT * FROM t1 INNER JOIN t2 ON t1.id = t2.id', description: 'Inner join' },
          { code: 'SELECT * FROM t1 LEFT JOIN t2 ON t1.id = t2.id', description: 'Left join' },
          { code: 'SELECT * FROM t1 RIGHT JOIN t2 ON t1.id = t2.id', description: 'Right join' }
        ]
      },
      {
        title: 'Aggregation',
        items: [
          { code: 'SELECT COUNT(*) FROM table', description: 'Count rows' },
          { code: 'SELECT AVG(col) FROM table', description: 'Average' },
          { code: 'SELECT SUM(col) FROM table', description: 'Sum' },
          { code: 'SELECT col, COUNT(*) FROM table GROUP BY col', description: 'Group by' },
          { code: 'HAVING COUNT(*) > 5', description: 'Filter groups' }
        ]
      }
    ]
  },
  {
    id: 'html-css',
    name: 'HTML & CSS',
    icon: 'Globe',
    color: '#e34c26',
    description: 'Web development fundamentals',
    difficulty: 'Beginner',
    sections: [
      {
        title: 'HTML Basics',
        items: [
          { code: '<div>Content</div>', description: 'Division container' },
          { code: '<h1>Heading</h1>', description: 'Heading (h1-h6)' },
          { code: '<p>Paragraph</p>', description: 'Paragraph' },
          { code: '<a href="url">Link</a>', description: 'Hyperlink' },
          { code: '<img src="url" alt="description">', description: 'Image' },
          { code: '<button>Click</button>', description: 'Button' }
        ]
      },
      {
        title: 'CSS Selectors',
        items: [
          { code: 'element { }', description: 'Element selector' },
          { code: '.class { }', description: 'Class selector' },
          { code: '#id { }', description: 'ID selector' },
          { code: 'parent > child { }', description: 'Direct child' },
          { code: 'element:hover { }', description: 'Pseudo-class' }
        ]
      },
      {
        title: 'Flexbox',
        items: [
          { code: 'display: flex', description: 'Enable flexbox' },
          { code: 'justify-content: center', description: 'Horizontal alignment' },
          { code: 'align-items: center', description: 'Vertical alignment' },
          { code: 'flex-direction: row/column', description: 'Flex direction' },
          { code: 'gap: 1rem', description: 'Space between items' }
        ]
      },
      {
        title: 'Common Properties',
        items: [
          { code: 'color: #fff', description: 'Text color' },
          { code: 'background-color: #000', description: 'Background color' },
          { code: 'margin: 10px', description: 'Outer spacing' },
          { code: 'padding: 10px', description: 'Inner spacing' },
          { code: 'border-radius: 5px', description: 'Rounded corners' }
        ]
      }
    ]
  }
];