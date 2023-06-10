import React from 'react';
import styled from 'styled-components';

import CodeBox from './CodeBox';

const testCode = {
	code: `#include <bits/stdc++.h>
#define INF 2e9
#define MAX 4000001
#define foi(N) for(int i=1;i<=N;i++)
#define foj(N) for(int j=1;j<=N;j++)
#define pii pair<int, int>
#define endl '\\n'
typedef long long ll;
using namespace std;

int N, M, K;
ll seg[4000000],lazy[4000000],arr[1000001];

ll init(int node, int s, int e){
    if(s==e) return seg[node]=arr[s];
    else return seg[node]=init(node*2, s, (s+e)/2)+init(node*2+1, (s+e)/2+1, e);
}
void propagate(int node, int s, int e){
    if(lazy[node]!=0){
        seg[node]+=(e-s+1)*lazy[node];
        // leaf 가 아니면
        if(s!=e){
            lazy[node*2]+=lazy[node];
            lazy[node*2+1]+=lazy[node];
        }
        lazy[node]=0;
    }
}
void update(int node, int s, int e, int left, int right, ll diff){
    propagate(node, s, e);
    // node 가 담당하는 구간 [s,e]
    // 구해야 하는 구간 [left, right]
    if(left>e || right<s) return;
    if(left<=s && e<=right){
        seg[node]+=(e-s+1)*diff;
        if(s!=e){
            lazy[node*2]+=diff;
            lazy[node*2+1]+=diff;
        }
        return;
    }
    update(node*2, s, (s+e)/2, left, right, diff);
    update(node*2+1, (s+e)/2+1, e, left, right, diff);
    seg[node]=seg[node*2]+seg[node*2+1]; 
}
ll sum(int node, int s, int e, int left, int right){
    propagate(node, s, e);
    // node 가 담당하는 구간 [s,e]
    // 구해야 하는 구간 [left, right]
    if(left>e || right<s) return 0;
    if(left<=s && e<=right) return seg[node];
    return sum(node*2, s, (s+e)/2, left, right)+sum(node*2+1, (s+e)/2+1, e, left, right);
}
int main(){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    cin>>N>>M>>K;
    foi(N) cin>>arr[i];
    init(1, 1, N);
    foi(M+K){
        ll a, b, c, d;
        cin>>a;
        if(a==1){
            cin>>b>>c>>d;
            update(1, 1, N, b, c, d);
        }
        else{
            cin>>b>>c;
            cout<<sum(1, 1, N, b, c)<<endl;
        }
    }
}
	`,
	language: 'cpp',
	showLineNumbers: true,
	startingLineNumber: 1,
	wrapLines: true,
	wrapLongLines: false,
};

const imporovedTestCode = {
	code: `#include <bits/stdc++.h>
#include <iostream>
#include <vector>
#define MAX 4000001

typedef long long ll;
using namespace std;

int N, M, K;
vector<ll> seg(MAX * 4), lazy(MAX * 4), arr(1000001);

ll init(int node, int s, int e) {
    if (s == e) return seg[node] = arr[s];
    else return seg[node] = init(node * 2, s, (s + e) / 2) + init(node * 2 + 1, (s + e) / 2 + 1, e);
}

void propagate(int node, int s, int e) {
    if (lazy[node] != 0) {
        seg[node] += (e - s + 1) * lazy[node];
        if (s != e) {
            lazy[node * 2] += lazy[node];
            lazy[node * 2 + 1] += lazy[node];
        }
        lazy[node] = 0;
    }
}

void update(int node, int s, int e, int left, int right, ll diff) {
    propagate(node, s, e);
    if (left > e || right < s) return;
    if (left <= s && e <= right) {
        seg[node] += (e - s + 1) * diff;
        if (s != e) {
            lazy[node * 2] += diff;
            lazy[node * 2 + 1] += diff;
        }
        return;
    }
    update(node * 2, s, (s + e) / 2, left, right, diff);
    update(node * 2 + 1, (s + e) / 2 + 1, e, left, right, diff);
    seg[node] = seg[node * 2] + seg[node * 2 + 1];
}

ll sum(int node, int s, int e, int left, int right) {
    propagate(node, s, e);
    if (left > e || right < s) return 0;
    if (left <= s && e <= right) return seg[node];
    return sum(node * 2, s, (s + e) / 2, left, right) + sum(node * 2 + 1, (s + e) / 2 + 1, e, left, right);
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    cin >> N >> M >> K;
    for (int i = 1; i <= N; i++) cin >> arr[i];
    init(1, 1, N);
    for (int i = 0; i < M + K; i++) {
        ll a, b, c, d;
        cin >> a;
        if (a == 1) {
            cin >> b >> c >> d;
            update(1, 1, N, b, c, d);
        } else {
            cin >> b >> c;
            cout << sum(1, 1, N, b, c) << '\\n';
        }
    }

    return 0;
}
    `,
	language: 'cpp',
	showLineNumbers: true,
	startingLineNumber: 1,
	wrapLines: true,
	wrapLongLines: false,
};

function ResultImproved() {
	return (
		<Wapper>
			<CodeBox className="UserCode" props={testCode} />
			<CodeBox className="ImprovedCode" props={imporovedTestCode} />
		</Wapper>
	);
}

export default ResultImproved;

const Wapper = styled.div`
	display: flex;
	justify-content: space-between;
`;
