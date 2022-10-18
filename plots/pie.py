from dash import Dash, dcc, html, Input, Output
import plotly.express as px
import pandas as pd
from base64 import b64encode
import io

app = Dash(__name__)

data = pd.read_csv('./keywords.csv', encoding='utf8')

buffer = io.StringIO()
html_bytes = buffer.getvalue().encode()
encoded = b64encode(html_bytes).decode()

app.layout = html.Div([
  dcc.Graph(id="graph"),
  html.P("Type:"),
  dcc.Dropdown(
    id='target',
    options=['All', 'Accident', 'Non Accident'],
    value='All', clearable=False
  ),
  html.A(
    html.Button("Download as HTML"), 
    id="download",
    href="data:text/html;base64," + encoded,
    download="pie.html"
  ),
])

@app.callback(
  Output("graph", "figure"), 
  Input("target", "value"),
)

def generate_chart(target):
  if (target == 'Non Accident'):
    df = data[data['target'] == 0].head(10)
  elif (target == 'Accident'):
    df = data[data['target'] == 1].head(10)
  else:
    df = data.head(10)

  fig = px.pie(
    df,
    values=df['value'],
    names=df['label'],
    hole=.3,
    color_discrete_sequence=['#1125F2', '#1265FC', '#1C99E6', '#12E0FC']
  )
  fig.write_html(buffer)
  return fig

app.run_server(debug=True)